import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'
function Content() {
  return (
    <>
    
    <div className='container'>
      <div className='p-5 text-centre bg-light-dark rounded'>
        <h1 className='text-light'> Portal to Use AI Models</h1>
        <p className='text-light lead'>Stock price prediction model built using a Long Short-Term Memory (LSTM) neural network. The goal of this project is to understand how time-series data works and how LSTM models can be used to analyze sequential stock market data.

The model uses historical stock prices to learn patterns over time and make basic future price predictions. Key steps in the project include data preprocessing, normalization, sequence creation, and training an LSTM model on past stock price data.
</p>
        <Button text='Explore' class='btn-outline-info' url='/dashboard'/>
      </div>
      
    </div>
    
      
    </>
  )
}

export default Content