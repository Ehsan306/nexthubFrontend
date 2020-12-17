import React,{useEffect,useState} from 'react';
import "../../CSS/influenceOffering.css"
import Avatar from '@material-ui/core/Avatar';
import Face from '../../images/dp.png'
// import cardImage from "../../images/image2.png"
// import cardImage2 from "../../images/image1.png" 
import { Card } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import '../../CSS/editProduct.css'
function InfluenceOfferingCaed() {
   
    const [dataArray,setArray] = useState([])
    const [editModal,setEditModal] = useState(false)
    const [productId, setProductId] = useState('')
    const [ title, setTitle] = useState('')
    const [ price, setPrice] = useState('')
    const [ clickedProduct, setClicketProduct] = useState({})

    let token;
    token = localStorage.usertoken
    const decoded = jwt_decode(token)
    let currentId = decoded._id

    useEffect(() => {
            
            console.log(currentId)

            axios.get('http://localhost:3000/api/infulencerOffer/getSpecificUserProducts/'+currentId)
            .then((res) => {
                setArray(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
            
    },[])

    useEffect(() => {
        if(productId === ''){
            console.log('niklo beta')
        }else{
            setEditModal(true)
           
            
        }
    },[productId])

    useEffect(() => {
        axios.get('http://localhost:3000/api/infulencerOffer/getSpecificProduct/'+productId)
        .then((res) => {
            setClicketProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[editModal])

    useEffect(() => {
        console.log(clickedProduct)
    },[clickedProduct])
    
    const closeEdit = () => {
        setEditModal(false)
        setClicketProduct({})
        setProductId('')
    }
   


    const mySubmitHandler = (event) => {
        event.preventDefault();

         if (!Number(price)) {
          alert("Price must Be Number");
        }
         let productObj = {
            price : price,
            title : title,
            image : null
        }

        var form_data = new FormData();
        for (var key in productObj) {
          form_data.append(key, productObj[key]);
        }
        console.log(form_data)
        axios.put('http://localhost:3000/api/infulencerOffer/editProduct/'+productId,form_data )
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        
      }
     



    useEffect(() => {
        console.log(dataArray)
     },[dataArray])

  return (
    <div>
        <div className="webView">
        {
            dataArray.map((obj,index) => {
                return(
                    <div style={{
                        textAlign : 'center',
                        fontFamily: 'Inika, serif'
                    }}>
                        <Card>
                            
                        <div className="row">
                            <div className="col-8">
                             <Card.Body>
                                <Card.Title>
                                    <h2>
                                        {obj.title}
                                    </h2>
                                    <h2>
                                        Promotion (${obj.price})
                                    </h2>
                                </Card.Title>
                                
                            </Card.Body>
                            <br/>
                            <br/>
                            <br/>
                            {
                                token === undefined
                                ?
                                <button className="my-button">
                                    See More
                                </button>
                                :
                                <button className="my-button1" onClick={() => {setProductId(obj._id)}} >
                                    Edit
                                </button>
                            }
                            
                            </div>
                            <div className="col-4">
                                <div className="container">
                                <img src={obj.image} alt="" style={{
                                    paddingRight : '50px',
                                    paddingTop : '20px',
                                    paddingBottom : '20px',
                                    width: '200px'
                                }} />
                                </div>
                                
                            </div>
                        </div>
                        <div style={{
                            paddingLeft : '30px'
                        }}>
                            <div className="row" style={{
                                paddingLeft : '20px'
                            }}>
                                <Avatar alt="Remy Sharp" src={Face} />
                                
                            </div>
                            <div className="row">
                            <b style={{
                                color: '#df362d',
                                fontSize : '16px'
                                }}>@japarker</b>
                            </div>
                        </div>
                        </Card>
                        
                        <br/>
                    </div>
                )
            })
        }
        </div>
        {/* <div className="mobView">
        {
            dataArray.map((obj,index) => {
                return(
                    <div style={{
                        textAlign : 'center',
                        fontFamily: 'Inika, serif'
                    }}>
                        <Card>
                            
                        <div className="row">
                            <div className="col-12">
                             <Card.Body>
                                <Card.Title>
                                    <h2 style={{
                                        fontSize : '24px'
                                    }}>
                                        {obj.title}
                                    </h2>
                                    <h2 style={{
                                        fontSize : '24px'
                                    }}>
                                        {obj.price}
                                    </h2>
                                </Card.Title>
                                
                            </Card.Body>
                            
                            </div>
                            
                        </div>
                        <div className="row">
                               <div className="container">
                                   <div style={{
                                       
                                    display : 'flex',
                                    justifyContent : 'center'
                                   }}>
                                        <img src={obj.image} alt="" style={{
                                    paddingTop : '20px',
                                    paddingBottom : '20px',
                                    width: '200px'
                                }} />
                                   </div>
                                
                                </div>
                                
                            
                        </div>
                        <div className="row">
                            <div className="col-2">
                            <div style={{
                                paddingLeft : '20px'
                                }}>
                                    <div className="row">
                                        <Avatar alt="Remy Sharp" src={Face} />
                                        
                                    </div>
                                    <div className="row">
                                    <b style={{
                                        color: '#df362d',
                                        fontSize : '14px'
                                        }}>@japarker</b>
                                    </div>
                        </div>
                            </div>
                            <div className="col-9">
                            {
                                token === undefined
                                ?
                                <button className="my-button">
                                    See More
                                </button>
                                :
                                <button className="my-button1">
                                    Edit
                                </button>
                            }
                            </div>
                            
                        </div>
                        
                        
                        </Card>
                        
                        <br/>
                    </div>
                )
            })
        }
        </div> */}

        {
            token === undefined
            ?
            <div></div>
            :
            <div className="row">
                <div className="col-12">
                <Card style={{
                    alignItems : 'center'
                }}>
                    <div className="row" style={{
                        marginTop : '30%',
                        marginBottom : '30%'
                    }}>
                      
                            <div>
                                <button className="my-button1">
                                    Add New
                                </button>
                            </div>
                    
                     </div>
                </Card>
                </div>
                <br/>
            </div>
        }
                    <Dialog
                    aria-labelledby="customized-dialog-title" 
                    open={editModal}
                    onClose={closeEdit}
                    >
                        <DialogTitle id="alert-dialog-title" style={{
                            borderBottom : '1px solid lightgrey'
                        }}>{"Update Product"}</DialogTitle>
                        <DialogContent>
                            <form class="form-horizontal" onSubmit={mySubmitHandler}>
                                <br/>
                            <input
                                class="form-control form-control-lg"
                                type='text'
                                name='title'
                                defaultValue={clickedProduct.title}
                                placeholder='Title'
                                onChange={(e) => {setTitle(e.target.value)}}
                            />
                            <br/>
                            <input
                                class="form-control form-control-lg"
                                type='text'
                                name='price'
                                placeholder='Price'
                                defaultValue={clickedProduct.price}
                                onChange={(e) => {setPrice(e.target.value)}}
                            />
                            <br/>
                            <br/>
                            <div style={{
                                float: 'right'
                            }}>
                            <button type='submit' className="my-button1">Update</button>
                            </div>
                            </form>
                            
                        </DialogContent>
                    
                </Dialog>
       </div>
  );
}

export default InfluenceOfferingCaed



        // .then(function (response) {
        //   console.log(response);
        //   alert("Profile Added Succesfully",5000)
        //   history.push("/profile");
        //   //set states here to render in map from response.data
        // })
        // .catch(function (error) {
    
        //   alert('Something Went Wron Check All Fields And Fill it ')
        // })
        // .then(function () {
        //   // always executed
         
        // });
        // axios.put('http://localhost:3000/api/infulencerOffer/editProduct/', formData, config)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        // axios.put('http://localhost:3000/api/infulencerOffer/editProduct/',user)