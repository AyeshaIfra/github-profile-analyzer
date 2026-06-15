const axios=require("axios");
const db=require("../db");

exports.analyzeProfile=async(req,res)=>{
 try{

const username=req.params.username;

const response=
await axios.get(
`https://api.github.com/users/${username}`
);

const data=response.data;

const values=[
data.login,
data.name,
data.followers,
data.following,
data.public_repos,
data.html_url,
data.avatar_url
];

db.query(
`
INSERT INTO github_profiles
(username,name,followers,
following,public_repos,
profile_url,avatar_url)

VALUES(?,?,?,?,?,?,?)

ON DUPLICATE KEY UPDATE
followers=?,
following=?,
public_repos=?
`,
[
...values,
data.followers,
data.following,
data.public_repos
]
);

res.json(data);

 }catch(err){

res.status(500).json({
message:"Profile not found"
});

 }
};


exports.getProfiles=(req,res)=>{

db.query(
"SELECT * FROM github_profiles",
(err,result)=>{

if(err)
return res.status(500);

res.json(result);

});

};


exports.getProfile=(req,res)=>{

db.query(
"SELECT * FROM github_profiles WHERE id=?",
[req.params.id],
(err,result)=>{

if(err)
return res.status(500);

res.json(result);

});

};