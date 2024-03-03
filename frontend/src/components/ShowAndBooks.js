import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
function ShowAndBooks() {
  const [concertData, setConcertData] = useState([]);

  const [originalData, setOriginalData] = useState([]);
  const  [review,setReview]=useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [star,setStar]=useState()
const [collapse,setCollapse]=useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/ShowAndBookId');
        const data = await response.json();
        if (Array.isArray(data)) {
          setConcertData(data._doc);
          setOriginalData(data._doc)
        } else {
          setConcertData([]);
        }
      } catch (error) {
        console.error('Error:', error);
        setConcertData([]);
      }
    };
    fetchData();
  }, []);
  const [concertData2, setConcertData2] = useState([]);
  const [searchedId, setSearchedId] = useState('');
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = concertData.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems2 = concertData2.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();

    const ReviewSubmit = (e) => {

      e.preventDefault();

      fetch("http://localhost:8081/Review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review: comment,
          rating:star ,
          book_id:searchedId,
      
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setReview(false)
            navigate('/ShowAndBooks');
          } else {
            console.log(data);
            setReview(false)

            navigate('/ShowAndBooks');
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
  
  
    

    const singleSearch = () => {
      // Filter the data based on the entered ID
      const filteredData = concertData.filter((student) => student.id === parseInt(searchedId));
      
      setConcertData2(filteredData);
      setCollapse(false)
    };


  
const  [comment,setComment]=useState()
const [minValue, setMinValue] = useState('30');
 
    const displayMin = (event) => {
        setMinValue(event[0]);
    }
    const Slider = () => (
        <Nouislider
            range={{ min: 0, max: 100 }} start={[30, 80]}
            connect onChange={displayMin} />
    );
    useEffect(() => {
      setConcertData(originalData.filter((student) => student.price >= minValue));
    }, [minValue]);

    const handleRadioClick = (status) => {
      if (status === "A") {

        setConcertData([...originalData].sort((a, b) => a.price - b.price));
      } else if (status === "D") {
        setConcertData([...originalData].sort((a, b) => b.price - a.price));
      }
    };
  return (
    <>
    <div className=' text-center'>


<div>
  
</div>

<h5 className='colorw'>All Books List</h5>
<div className='text-center table-box center2 display'>
<div className='left'>
          <table className="table2">
            <thead >
              <tr >
                <th >Book ID</th>
                <th>
  Author ID
  <input 
    type='number' 
    placeholder='Find by author ID' 
    onChange={(e) => {
      const searchValue = e.target.value;
      if (searchValue !== '') {
        setConcertData(originalData.filter((student) => student.author_id == searchValue));
      } else {
        setConcertData(originalData);
      }
    }}
  />
</th>


                <th>Cover</th>
                <th>Title
                
                <input 
    type='text' 
    placeholder='Find by title' 
    onChange={(e) => {
      if(e.target.value){
      setConcertData(concertData.filter((student) => student.title.toLowerCase().includes(e.target.value.toLowerCase())));}
      else{
        setConcertData(originalData)
      }
    }
}
  />

                </th>

                
                <th>Description</th>
                <th>Genre
                <input 
    type='text' 
    placeholder='Find by genre' 
    onChange={(e) => {
      if(e.target.value){
      setConcertData(concertData.filter((student) => student.genre.toLowerCase().includes(e.target.value.toLowerCase())));}
      else{
        setConcertData(originalData)
      }
    }
}
  />

                </th>
                <th>Price
{Slider()}
            <center>
                <div style={{ display: 'inline', padding: '2%' }}>
                    <h3>Min Value</h3>
                    <br></br>
                    <div style={{
                        display: 'inline',
                        padding: '1%'
                    }}>
                      
                        {minValue}

                    </div>
                </div>
            </center>
            <th>
  
 
  <input 
    type='radio' 
    name='status'
    onClick={() => handleRadioClick("A")}

  />
  Ascending

  <input 
    type='radio' 
    name='status'
    onClick={() => handleRadioClick("D")}

  />
  Descending
</th>


                </th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody className='tbody'>
              {currentItems.map((student, index) => (
                <tr key={index}>
                  <td>{student.book_id}</td>
                 <td>{student.author_id}</td>
                  <td>{student.cover}</td>
                  <td>{student.title}</td>
                  <td>{student.description}</td>
                  <td>{student.genre}</td>
                  <td>{student.price}</td>
                  <td>{student.rating}</td>
                  

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          {Array.from({ length: Math.ceil(concertData.length / itemsPerPage) }, (_, i) => i + 1).map((page) => (
            <button  key={page} onClick={() => paginate(page)} className={`btn ${currentPage === page ? 'btn-success' : 'btn-warning'}`}>
              {page}
            </button>
          ))}
        </div>


 


        <div>
          <input type="number" className='border'  onChange={(e) => setSearchedId(e.target.value)} placeholder="Enter Student ID" />
          <button type="button" className='button border' onClick={singleSearch}>Search</button>
        </div>
</div>


    </div>
    {collapse?<></>:

    <div className='text-center center2'>
          <table className="table2">
            <thead>
              <tr>
              <th >Book ID</th>
                <th>Author ID</th>
                <th>Cover</th>
                <th>Title</th>
                <th>Description</th>
                <th>Genre</th>
                <th>Publish Date</th>
                <th>Price</th>
                <th>#Tags</th>
              </tr>
            </thead>
            <tbody className='tbody'>
              {currentItems2.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.author_id}</td>
                  <td>{student.cover}</td>
                  <td>{student.title}</td>
                  <td>{student.description}</td>
                  <td>{student.genre}</td>
                  <td>{student.publishDate}</td>
                  <td>{student.price}</td>
                  <td>{student.tags}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div >
            <button onClick={()=>{setReview(true);}}>
              Enter Your Review
            </button>
            {review?<div><input type='text' onChange={(e)=>{ setComment(e.target.value)}} placeholder='Enter your review here'/>
            <div class="btn-group" role="group" aria-label="Basic example">
              <h6 className='colorw center2' >Rating</h6>
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={()=>{setStar(1)}} />
  <label class="btn btn-outline-primary" for="btnradio1">1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={()=>{setStar(2)}}/>
  <label class="btn btn-outline-primary" for="btnradio2">2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={()=>{setStar(3)}}/>
  <label class="btn btn-outline-primary" for="btnradio3">3</label>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" onClick={()=>{setStar(4)}}/>
  <label class="btn btn-outline-primary" for="btnradio4">4</label>
  <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" onClick={()=>{setStar(5)}}/>
  <label class="btn btn-outline-primary" for="btnradio5">5</label>
  <button onClick={ReviewSubmit}>Submit</button>
</div>

</div>


</div>:<></>}

          </div>

        </div>
}
    </>
  )
}
export default ShowAndBooks;

