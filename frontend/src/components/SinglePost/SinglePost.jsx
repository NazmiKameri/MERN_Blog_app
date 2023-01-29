import './SinglePost.css';

function SinglePost() {
	return (
		<div className="singlePost">
			<div className="wrapper">
				<img
					src="https://st3.depositphotos.com/5793738/15485/i/600/depositphotos_154856142-free-stock-photo-colorful-autumn-in-the-forest.jpg"
					alt=""
					className="postImg"
				/>
				<h1 className="postTitle">
					Lorem lorem lorem
					<div className="postEdit">
						<i class="edit fa-solid fa-pen-to-square"></i>
						<i class="delete fa-solid fa-trash"></i>
					</div>
				</h1>
				<div className="postInfo">
					<span className="postAuthor">Author: Nk</span>
					<span className="postCreatedDate">3 hours ago</span>
				</div>
				<p className="postDecsripton">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error recusandae commodi
					possimus. Porro cumque at, nulla ullam aspernatur soluta similique temporibus quia hic
					odio illo molestias saepe tenetur voluptatum impedit!Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Error recusandae commodi possimus. Porro cumque at, nulla
					ullam aspernatur soluta similique temporibus quia hic odio illo molestias saepe tenetur
					voluptatum impedit!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
					recusandae commodi possimus. Porro cumque at, nulla ullam aspernatur soluta similique
					temporibus quia hic odio illo molestias saepe tenetur voluptatum impedit!Lorem ipsum dolor
					sit, amet consectetur adipisicing elit. Error recusandae commodi possimus. Porro cumque
					at, nulla ullam aspernatur soluta similique temporibus quia hic odio illo molestias saepe
					tenetur voluptatum impedit!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
					recusandae commodi possimus. Porro cumque at, nulla ullam aspernatur soluta similique
					temporibus quia hic odio illo molestias saepe tenetur voluptatum impedit!
				</p>
			</div>
		</div>
	);
}

export default SinglePost;
