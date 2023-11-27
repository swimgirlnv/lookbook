import "./Act1Scene1.css";

function Act1Scene1() {
  
  return (
    <div className="Act1Scene1">
      <div className="text">
        Welcome to the Theater...
      </div>

      <div className="image-container">
        <div className="pano">
          <img className ="bigImg" alt="ltsf" src="https://i.imgur.com/XoVeEeo.jpg"></img>
        </div>
        <div className="row-imgs">
          <div className="row-img">
            <img className="img" src="https://i.imgur.com/fqJdLbf.png"></img>
          </div>
          <div className="row-img">
            <img className="img" src="https://folsomtimes.com/wp-content/uploads/2023/07/IMG_9399.jpeg"></img>
          </div>
        </div>
      </div>

      <div className="text-light">
      Enter stage right our protagonist, KYLIE (8), dressed up in a renaissance maiden costume with her nose buried in <i>Norton Shakespeare Anthology</i>.
      </div>

      <div className="image-container">
        <div className="row-imgs">
          <div className="">
            <img style={{height:"260px"}}
            src="https://i.imgur.com/RVz7ePr.jpg" alt="Kylie"></img>
          </div>
          <div>
            <img style={{width: "100%", height:"260px"}}
            src="https://i.imgur.com/9e5S3sC.jpg" alt="Kylie with book"></img>
          </div>
        </div>
      </div>

      <div className="text-light">
        We descend into the weird and wonderful world of <strong>Shakespeare</strong>.
      </div>

      <div className="image-container">
        <div className="row-imgs">
          <div className="">
            <img style={{height:"260px"}}
            src="https://i.imgur.com/JROYlLR.jpg" alt="Kylie"></img>
          </div>
          <div>
            <img style={{width: "100%", height:"260px"}}
            src="https://i.imgur.com/nnv1jHi.jpg" alt="Kylie with book"></img>
          </div>
        </div>
      </div>

      <div className="text-light">
        As night decends on the theater, we journey through time: every minute is a new year and a new play, and in the audience Kylie grows older.
      </div>

      <div className="text-light">
        We zoom in on Kylie in the audience as she whispers...
      </div>

      <div className="text-light">
        <strong>
        Even so my bloody  thoughts with violent pace shall ne’er look back, ne’er ebb to humble love...
        </strong>
      </div>
    </div>
  )
}

export default Act1Scene1;