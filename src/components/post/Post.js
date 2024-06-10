import  './Post.css'

function Post() {
  return (
    <div className='post'>
        <img
            src='https://images.pexels.com/photos/9017612/pexels-photo-9017612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''>
        </img>
        <div className='postInfo'>
            <div className='postCategories'>
                <div className='postcat'>item1</div>
                <div className='postcat'>item2</div>
            </div>
        <span className='postTitle'>Incididunt aliqua eiusm</span><hr/>
        <span className='postDate'>1 hour ago</span>
        <div  className='postDescription'>Adipisicing officia amet enim voluptate sunt consequat nostrud in adipisicing. Incididunt in cupidatat sunt sunt est veniam elit pariatur cillum culpa dolor adipisicing voluptate. Labore ea occaecat cillum non Lorem ut esse mollit nulla.</div>

        </div>

    </div>
  )
}

export default Post