const db = require("../config/db");

const { fetchGithubProfile } = require("../services/githubService");

// ANALYZE PROFILE
exports.analyzeProfile = async (req, res) => {
  try {
    const username = req.params.username;

    const data = await fetchGithubProfile(username);

    db.query(
      `
      INSERT INTO github_profiles
      (username, name, followers, following, public_repos, profile_url, avatar_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      followers=?,
      following=?,
      public_repos=?
      `,
      [
        data.login,
        data.name,
        data.followers,
        data.following,
        data.public_repos,
        data.html_url,
        data.avatar_url,

        data.followers,
        data.following,
        data.public_repos
      ],
      (err, result) => {
        // ✅ THIS IS WHERE YOU ADD THE FIX
        if (err) {
          console.log("DB ERROR:", err.message);
          return res.status(500).json({
            message: "Database error",
            error: err.message
          });
        }

        return res.json({
          success: true,
          username: data.login,
          followers: data.followers,
          publicRepos: data.public_repos
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err.message
    });
  }
};

// GET ALL PROFILES
exports.getProfiles = (req, res) => {
  db.query("SELECT * FROM github_profiles", (err, result) => {
    if (err) {
      console.log("DB ERROR:", err.message);
      return res.status(500).json({
        message: "Database error",
        error: err.message
      });
    }

    res.json(result);
  });
};

// GET SINGLE PROFILE
exports.getProfile = (req, res) => {
  db.query(
    "SELECT * FROM github_profiles WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log("DB ERROR:", err.message);
        return res.status(500).json({
          message: "Database error",
          error: err.message
        });
      }

      res.json(result);
    }
  );
};