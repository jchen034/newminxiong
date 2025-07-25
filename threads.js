

var close = document.getElementById("close");


var commentButton = document.getElementById("commentButton");

function Commentclick(commentButtonvalue) {
    var commentviewlike = document.getElementById("commentviewlike");
    var commentview = document.getElementById("commentview");
    var commentcollection = document.getElementById("commentcollection");
    var likeImage = document.getElementById("likeImage" + commentButtonvalue);
    var likeButton = document.getElementById("likebutton"+commentButtonvalue);
    var postcontent = document.getElementById("content"+commentButtonvalue);
    var postname = document.getElementById("name"+commentButtonvalue);
    var postdate = document.getElementById("date"+commentButtonvalue);
    var postimg = document.getElementById("img"+commentButtonvalue);
    commentview.style.position="fixed";
    commentview.style.top="0";
    commentview.style.left="0"
    commentview.showModal();
    commentcollection.innerHTML = "";
    document.body.style.overflow = "hidden";
    document.body.style.filter = 'brightness(' + 0.5 + ')';
    commentviewlike.value = commentButtonvalue;
    //set the value of commentview
    var commentviewname = document.getElementById("commentviewname");
    var commentviewdate = document.getElementById("commentviewdate");
    var commentviewcontent = document.getElementById("commentviewcontent");
    var commentviewprofileImage = document.getElementById("commentviewprofileImage");
    var commentviewlikeImage = document.getElementById("commentviewlikeImage");
    //set the value of commentview from firestore doc and the id of commentButton
    commentviewname.textContent = postname.textContent;
    commentviewdate.textContent = postdate.textContent;
    commentviewcontent.textContent = postcontent.textContent;
    commentviewprofileImage.src = "./pictures/profile2.png";
    //if the text in likeButton is blue, the likeImage will change to like!.png 
    commentviewlikeImage.src = likeImage.src;
    commentviewlike.textContent = likeButton.textContent;
    commentviewlike.style.color = likeButton.style.color;
    //clear the commentimg aera
    var commentviewimg = document.getElementById("commentviewimg");
    commentviewimg.innerHTML = "";

    //creat a commentimg aera if the data contains imageUrl
    if (postimg !== null) {
        //img aera
        var img = document.createElement("img");
        img.src = postimg.src;
        img.style.width = "100%";
        img.style.height = "400px";
        //add img aera to commentview
        var commentomg = document.getElementById("commentviewimg");
        commentviewimg.appendChild(img);
    }
    //get the comment data from doc,it store in post collection file a collection comment collection
    
}


document.addEventListener('DOMContentLoaded', function () {
    var close = document.getElementById("close");
    var commenviewtlike = document.getElementById("commentviewlike");
    var commentviewlikeImage = document.getElementById("commentviewlikeImage");
    close.addEventListener('click', function () {
        commentview.close();
        //disable scrolling the background
        document.body.style.overflow = "auto";
        document.body.style.filter = 'blur(' + 0 + 'px)';
        document.getElementById("navigator").style.height=40+"px"
        document.getElementById("navigator").style.position="fixed"
        document.getElementById("navigator").style.top=0+"px"
        document.getElementById("navigator").style.marginTop=-40+"px"

    });
    commenviewtlike.addEventListener('click', function () {
        commentviewlikeclick();
    });
    commentviewlikeImage.addEventListener('click', function () {
        commentviewlikeclick();
    });
    function commentviewlikeclick() {
        var commentviewlikeImage = document.getElementById("commentviewlikeImage");
        var clicklikebutton = document.getElementById("likebutton" + commentviewlike.value);
        var clicklikeimage = document.getElementById("likeImage" + commentviewlike.value);
    
        if (commentviewlike.style.color == "black") {
            commentviewlike.style.color = "blue";
            commentviewlikeImage.src = "./pictures/like!.png"
            commentviewlike.textContent = parseInt(commentviewlike.textContent) + 1;
    
            clicklikebutton.style.color = "blue";
            clicklikeimage.src = "./pictures/like!.png"
            clicklikebutton.textContent = parseInt(clicklikebutton.textContent) + 1;
            //add the like data to firestore
        }
        else {
            commentviewlike.style.color = "black";
            commentviewlikeImage.src = "./pictures/like.png";
            commentviewlike.textContent = parseInt(commentviewlike.textContent) - 1;
    
            clicklikebutton.style.color = "black";
            clicklikeimage.src = "./pictures/like.png";
            clicklikebutton.textContent = parseInt(clicklikebutton.textContent) - 1;
            //delete the like data from firestore
    
        }
    }
});



//handle the like button in commentview


const stars = document.querySelectorAll('.star');
function handleAnimationComplete() {
    //change the position of star
    stars.forEach((star) => {
        star.style.top = Math.floor(Math.random() * 100) + "%";
        star.style.left = Math.floor(Math.random() * 100) + "%";
    });
    // 如果你希望元素在动画完成后继续闪烁，你可以重新触发动画

    //event.target.style.animation = 'none';
    //void event.target.offsetWidth; // 触发重绘
    //event.target.style.animation = 'blink 2s infinite';
}
const intervalId = setInterval(handleAnimationComplete, 1000);




