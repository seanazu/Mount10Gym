import React, { useEffect, useState } from 'react';
import '../../../Styles/StaffCard.css'
import {Button} from '@mui/material'
import axios from 'axios'


const OurStaff = () => {
	const[worker, setWorker] = useState({
		name:'',
		firstParagraph:''
	})
	const[editDisplay, setEditDisplay] = useState('none')
	const[workers, setWorkers] = useState([])
	
	useEffect(async()=>{
		const resp = await axios.get(`${process.env.REACT_APP_MY_API}/workerCard`, {
			headers: {
				'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDUwNTIzNDB9.qHXpnfvlUM_Pf2S3cCmVPyIj-JlakAZrxzA9OGyH0ac'
			}
		})
		setWorkers(resp.data)
		
	},[])
	

	const workerObj = workers.map((worker) =>{
		return(
			<div className='worker-card'>
			<div className='worker-card-body'>
            <figure className="image-block">
            	<img className='worker-image' src={`http://localhost:8080/images/${worker.image}`} alt="not found" />
            	<figcaption className='worker-details'>
            		<h3 className='details-header'><Button style={{display:`${editDisplay}`}} variant="contained" color="primary" onClick={()=>{
						setWorker(worker)
					}}>
                          Success
                        </Button>{worker._id}
					<div className='read-more'>
                      ...עוד עליי
					  
					</div>
					</h3>
            		<div className='details-text' >
						{worker.firstParagraph}
						<br/>
						{worker.secondParagraph}
					 </div>
            	</figcaption>
            </figure>
			</div>
        </div>
		)
	})
    return (
		<div className='staff-layout' >
		<div className='cards-layout'>
          {workerObj}
		</div>
		<br/>
		<br/>
		<br/>
		</div>
		
    );
};

export default OurStaff;