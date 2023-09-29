import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';

class AddProject1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientid: props.patientid,
      medicineid: this.props.medicineid,
      quantity: '',
    };
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send files along with other form data
    const formData = new FormData();
    formData.append('patientid', this.state.patientid);
    formData.append('medicineid', this.state.medicineid);
    formData.append('quantity', this.state.quantity);
   

    try {
      // Make a POST request using Axios
      const response = await axios.post('http://localhost:8081/newprescription', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success('Medicine added successfully', {
        duration: 4000, 
        position: 'top-center',
        icon: '🍃',
        // Display for 4 seconds
      });
     
      // Handle the response as needed (e.g., show a success message)
      console.log('Response:', response.data);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error:', error);
      toast.error('Error adding medicine! Please try again', {
        duration: 4000,
        position: 'bottom-center', 
        icon: '😔',
      });
    }
  };

  render() {
    return (
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-11 shadow rounded-lg sm:px-10 "> 
       
        <form onSubmit={this.handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder={this.props.medicineid} aria-label="medicineid" readOnly={true} name="medicineid" value={this.state.medicineid} onChange={this.handleInputChange}/>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Quantity" aria-label="quantity" name="quantity" value={this.state.quantity} onChange={this.handleInputChange}/>
        <button className="flex-shrink-0 bg-[#228e2d] hover:bg-[#104816] border-[#228e2d] hover:border-[#104816] text-sm border-4 text-white py-1 px-2 rounded" type="submit">
      Add 
      </button>
      </div>
        </form>
        
        
        </div>
      </div>
    );
  }
}

export default AddProject1;
