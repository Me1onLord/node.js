
let posts = [
    {postnumber:1 , text: "postcontent1"},
    {postnumber:2 , text: "postcontent2"},
    {postnumber:3 , text: "postcontent3"}
]


const listposts = () => {
    posts.map(post => {
        console.log(post.text);
    })
};


const addposts = (newpost, callback) => {
    posts.push(newpost);
    callback();
};

addposts({pustnumber:4, text: "postcontent4"},listposts);