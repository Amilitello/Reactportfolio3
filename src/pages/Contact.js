import React from "react";
function Contact (){
    return (
        <main className="container">
          <section className ="row">
              <div className ="col-md-8">
                <form>
                    <div className ="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className ="form-group">
                      <label for="exampleInputPassword1">Name</label>
                      <input type="text" className ="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className ="form-group">
                        <label for="exampleInputPassword1">Comments</label>
                        <textarea type="text" className="form-control" id="exampleInputPassword1"> </textarea>
                      </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
              </div>
          </section>
      </main>
    )
}

export default Contact