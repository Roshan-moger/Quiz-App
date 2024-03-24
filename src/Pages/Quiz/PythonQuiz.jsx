import React, { useRef, useState } from 'react'
import './Quiz.css'
import { useNavigate } from 'react-router-dom';
import { data1 } from '../../Data/data1';



const PythonQuiz = ({name, clg}) => {

    let [index, setIndex]= useState(0);
    let [question, setQuestion]= useState(data1[index])
    let [lock, setLock]=useState(false)
    let option1=useRef(null)
    let option2=useRef(null)
    let option3=useRef(null)
    let option4=useRef(null)
    const navigate= useNavigate()
    let option_array=[option1,option2,option3, option4]
    let [score, setScore]= useState(0);
    let [result, setResult]= useState(false)

    const checkAns=(e, ans)=>{
        if(lock===false){
            if(question.ans===ans){
                e.target.classList.add("correct")
                setLock(true)
                setScore(prev=> prev+1)
            }
            else{
                e.target.classList.add("wrong")
                option_array[question.ans-1].current.classList.add("correct")
                setLock(true)
            }
        }
    };
    const next=()=>{
        if(lock===true){
            if(index===data1.length-1){
                setResult(true);
                return 0;
            }
            setIndex(++index)
            setQuestion(data1[index]);
            setLock(false)
            option_array.map((option)=>{
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null;
            })
        }

    }
  return (

   <div>
    <h2 style={{fontSize:'28px' , fontWeight:'600'}}> Welcome, {name}</h2>
    <h3> College Name: {clg}</h3>

    <div className='container'> 
    <h1 style={{fontSize:'25px', fontWeight:600}}> Python Quiz</h1>
    <hr />
    { result?
    <>  <h3> You Scored {score} out of {data1.length}</h3>
        <button onClick={()=> navigate("/")}> Go to HomePage</button></> 
    :
    <>
    <h3>{index+1}. {question.question}</h3>
    <ul>
        <li ref={option1} onClick={(e)=> checkAns(e,1)}>{question.option1}</li>
        <li ref={option2} onClick={(e)=> checkAns(e,2)}>{question.option2}</li>
        <li ref={option3} onClick={(e)=> checkAns(e,3)}>{question.option3}</li>
        <li ref={option4} onClick={(e)=> checkAns(e,4)}>{question.option4}</li> 
    </ul>
    <button onClick={next}> Next</button>
    <div className='index' > {index+1} of {data1.length} Questions</div>
        </>}

       
    
    </div>
    </div>
  )
}

export default PythonQuiz