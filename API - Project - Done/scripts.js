let postsArry = fetch('https://jsonplaceholder.typicode.com/posts')
.then((jsonPosts) => jsonPosts.json())
.then((jsonPost) => jsonPost.map((postIndex) => createPost(postIndex)) )

let container_blog = document.getElementById('container_blog');
function createPost(postIndex)
{
    //Cerate element//
    const div = document.createElement('div');                   //All element get in this DIV
    const number_post = document.createElement('span');          // post`s number
    const title = document.createElement('h2');                  //post`s title  
    const body_post = document.createElement('p');               //Post`s body
    const Comments_users = document.createElement('section');    //section for a single Comment
    const CommH3 = document.createElement('h3');                 //Title Comments
    const author_name = document.createElement('p');             //writer post
    //Publish Comment
    let section_comment_Publish = document.createElement('section');
    let title_explain = document.createElement('h3');
    let write_title = document.createElement('label');
    let inp_title = document.createElement('input');
    let email_label = document.createElement('label');
    let inp_email = document.createElement('input');
    let comment_label = document.createElement('label');
    let textare_comment = document.createElement('textarea');
    let btn_publish = document.createElement('button');


    //add Classes to the Elements//
    div.classList.add('style_div');                    
    number_post.classList.add('number_post')
    title.classList.add('title');
    author_name.classList.add('author_name');
    body_post.classList.add('body_post');
    CommH3.classList.add('CommH3');
    Comments_users.classList.add('Comments_users');
    //Of publish comment
     section_comment_Publish.classList.add('section_comment_Publish');
     title_explain.classList.add('title_explain');
     write_title.classList.add('write_title');
     inp_title.classList.add('inp_title');
     email_label.classList.add('email_label');
     inp_email.classList.add('inp_email');
     comment_label.classList.add('comment_label');
     textare_comment.classList.add('textare_comment');
     btn_publish.classList.add('btn_publish');


    // comment_Publish.classList.add('comment_Publish');

    //inner to the elements
    CommH3.innerHTML="Comments";                        
    title.innerHTML = "Title of post : "+postIndex.title;  
    body_post.innerHTML = "What he think ? : "+postIndex.body;
    number_post.innerHTML = postIndex.id;
    nameAuthor(postIndex.userId,author_name,div); // responsive to name`s Authers
    allofComm(number_post.innerHTML);   //  responsible to all comments.
    //Of publish comment
    title_explain.innerHTML="Post a Comment";
    write_title.innerHTML="Comment title:";
    email_label.innerHTML="Email:";
    comment_label.innerHTML="Your comment"




 // This function sort the all comments. it get number_post = number of the post , and then check all comments that worth to number
    function allofComm (number_post)                                              
    {
        let commPost = fetch('https://jsonplaceholder.typicode.com/comments')
        .then((allComm) => allComm.json())
        .then((allCom) => allCom.map((i) => {
        if(i.postId == number_post)
        {
            
            let coomentPost =`name:`+`${i.name}`+"\n" +`email:`+`${i.email}`+"\n" +`body:`+`${i.body}`; //    this part crate a div and class with number post , and then 
            const divRecom = document.createElement('div');                                             //     prepares him to post.
            divRecom.innerHTML = coomentPost+"<hr>";                                                    //     i gave the number for the class because i want to non - display him.
            divRecom.classList.add(`divRecom`+`${number_post}`);                                       //
            return Comments_users.append(divRecom);                                                               
          
        }  
            }
                )
                    )
    .then((comm) => {div.append(Comments_users)})                                //the script responsible to post comments  
    .then((comm) => {Comments_users.style.display="none";})                      //open/close the comments by click on the title.
    title.addEventListener('click', () => {                                      // there is object by name open_close_comm and CommH3 (title : "Comments") , that check if the user
        if( open_close_comm == true)                                             //clicked already.
 
        {
            CommH3.style.display="unset";
            section_comment_Publish.style.display="flex";
            Comments_users.style.display="unset";
            open_close_comm=false;
        }
        else{
            Comments_users.style.display="none";
            CommH3.style.display="none"
            section_comment_Publish.style.display="none";
            open_close_comm=true;
        }
        });
    }
    let open_close_comm = true;    //this object Initialized for check if the comments of the blog are open or close

    //print to DOM
    div.appendChild(number_post);
    div.appendChild(title);
    div.appendChild(body_post);
    div.appendChild(CommH3);
    CommH3.style.display="none"; //display to comment`s title ("Comments")  
    //of publish Comment                          
    section_comment_Publish.appendChild(title_explain);
    section_comment_Publish.appendChild(write_title);
    section_comment_Publish.appendChild(inp_title);
    section_comment_Publish.appendChild(email_label);
    section_comment_Publish.appendChild(inp_email);
    section_comment_Publish.appendChild(comment_label);
    section_comment_Publish.appendChild(textare_comment);
    section_comment_Publish.appendChild(btn_publish);
    div.appendChild(section_comment_Publish);
    container_blog.appendChild(div);

    // Button of Publish comment//
    btn_publish.textContent ="Send";
    btn_publish.addEventListener('click' , () =>{
    inp_title="Title:"+document.getElementsByClassName('inp_title')[`${number_post.innerHTML}`-1].value+"\n";      //Because its array i did -1 (index).
    inp_email="Email:"+document.getElementsByClassName('inp_email')[`${number_post.innerHTML}`-1].value+"\n";     
    textare_comment="Your Comment:"+document.getElementsByClassName('textare_comment')[`${number_post.innerHTML}`-1].value+"\n"; 
    let sumComment = inp_title+inp_email+textare_comment;
    divRecom = document.createElement('div'); 
    forWitdth = document.createElement('p');
    divRecom.classList.add(`divRecom`+`${number_post.innerHTML}`);  
    forWitdth.innerHTML = sumComment+"<hr>";
    divRecom.appendChild(forWitdth);   
    Comments_users.appendChild(divRecom);
    //clean the inputs
    document.getElementsByClassName('inp_title')[`${number_post.innerHTML}`-1].value="";
    document.getElementsByClassName('inp_email')[`${number_post.innerHTML}`-1].value="";
    document.getElementsByClassName('textare_comment')[`${number_post.innerHTML}`-1].value="";
 })

    //Add New Post
    let addNewPost = document.getElementById('addNewPost');
    let section_newPost = document.getElementById('section_newPost');
    let close_open_addNewpost= true;

    addNewPost.addEventListener('click', (event) =>{
        if(close_open_addNewpost==true)
        {
            section_newPost.style.display = "unset";
            close_open_addNewpost=false;
        }
        else
        {
            section_newPost.style.display = "none";
            close_open_addNewpost=true;
        }
    })
}

//function of users/writer post. 
function nameAuthor(autherNumber,author_name,div)
{
fetch("https://jsonplaceholder.typicode.com/users")
.then(users => users.json())
.then(user => user.map((i)=>{
    if(i.id == autherNumber)
    {
        author_name.append(i.name);
        div.append(author_name)
    }
   return div
 })
    )
 
}

//New POST ADD
let btn_blog = document.getElementById('btn_blog');
let numberPost=100;
let close_open_comments=true;

btn_blog.addEventListener("click", (event)=> {
    numberPost++;
    const div = document.createElement('div');                   //All element get in this DIV
    const number_post = document.createElement('span');          // post`s number
    const title = document.createElement('h2');                  //post`s title  
    const body_post = document.createElement('p');               //Post`s body
    const Comments_users = document.createElement('section');    //section for a single Comment
    const CommH3 = document.createElement('h3');                 //Title Comments
    const author_name = document.createElement('p');             //writer post

    //Add Classes to Elements
    div.classList.add('style_div');                    
    number_post.classList.add('number_post')
    title.classList.add('title');
    author_name.classList.add('author_name');
    body_post.classList.add('body_post');
    CommH3.classList.add('CommH3');
    Comments_users.classList.add('Comments_users');

    //For publish comment
    let section_comment_Publish = document.createElement('section');
    let title_explain = document.createElement('h3');
    let write_title = document.createElement('label');
    let inp_title = document.createElement('input');
    let email_label = document.createElement('label');
    let inp_email = document.createElement('input');
    let comment_label = document.createElement('label');
    let textare_comment = document.createElement('textarea');
    let btn_publish = document.createElement('button');

    //add Classes for publish comment
    section_comment_Publish.classList.add('section_comment_Publish');
    title_explain.classList.add('title_explain');
    write_title.classList.add('write_title');
    inp_title.classList.add('inp_title');
    email_label.classList.add('email_label');
    inp_email.classList.add('inp_email');
    comment_label.classList.add('comment_label');
    textare_comment.classList.add('textare_comment');
    btn_publish.classList.add('btn_publish');

    //add Text for elements and value
    btn_publish.textContent ="Send";
    title_explain.innerHTML="Post a Comment";
    write_title.innerHTML="Comment title:";
    email_label.innerHTML="Email:";
    comment_label.innerHTML="Your comment";
    number_post.innerHTML = numberPost;
    title.innerHTML = "Title of post : " + document.getElementById('title_add').value;
    author_name.innerHTML = document.getElementById('author_Addname').value;
    body_post.innerHTML = document.getElementById('body_blog').value;
    CommH3.innerHTML="Comments";                        
    CommH3.style.display="none";
    
    //Print to DOM
    //Blog
    div.appendChild(number_post);
    div.appendChild(title);
    div.appendChild(author_name);
    div.appendChild(body_post);
    div.appendChild(CommH3);
    div.appendChild(Comments_users);
    container_blog.appendChild(div);
    //Add comments
    section_comment_Publish.appendChild(title_explain);
    section_comment_Publish.appendChild(write_title);
    section_comment_Publish.appendChild(inp_title);
    section_comment_Publish.appendChild(email_label);
    section_comment_Publish.appendChild(inp_email);
    section_comment_Publish.appendChild(comment_label);
    section_comment_Publish.appendChild(textare_comment);
    section_comment_Publish.appendChild(btn_publish);
    div.appendChild(section_comment_Publish);
    container_blog.appendChild(div);

    //button for open/close user`s Comments && add Comments too
    title.addEventListener("click" , (event) => {
        if(close_open_comments == true)
        {
        CommH3.style.display="unset";
        Comments_users.style.display="unset";
        close_open_comments=false;
        section_comment_Publish.style.display="flex";
        }
        else
        {
            CommH3.style.display="none";
            Comments_users.style.display="none";
            close_open_comments=true;
            section_comment_Publish.style.display="none";
        }
    })

        //Button for add new post
        btn_publish.addEventListener('click' , () =>{
        inp_title="Title:"+document.getElementsByClassName('inp_title')[`${number_post.innerHTML}`-1].value+"\n";      //Because its array i did -1 (index).
        inp_email="Email:"+document.getElementsByClassName('inp_email')[`${number_post.innerHTML}`-1].value+"\n";     
        textare_comment="Your Comment:"+document.getElementsByClassName('textare_comment')[`${number_post.innerHTML}`-1].value+"\n"; 
        let sumComment = inp_title+inp_email+textare_comment;
        divRecom = document.createElement('div'); 
        forWitdth = document.createElement('p');
        divRecom.classList.add(`divRecom`+`${number_post.innerHTML}`);  
        forWitdth.innerHTML = sumComment+"<hr>";
        divRecom.appendChild(forWitdth);   
        Comments_users.appendChild(divRecom);
        //clean the inputs
        document.getElementsByClassName('inp_title')[`${number_post.innerHTML}`-1].value="";
        document.getElementsByClassName('inp_email')[`${number_post.innerHTML}`-1].value="";
        document.getElementsByClassName('textare_comment')[`${number_post.innerHTML}`-1].value="";
     })
     //clean input of new post page after dont print post
     document.getElementById('title_add').value="";
     document.getElementById('author_Addname').value="";
     document.getElementById('body_blog').value="";
})