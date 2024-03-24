import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { TextField,MenuItem ,Button } from "@mui/material";
import { Categories } from "../../Data/Categories";
import "./Home.css"
const Home = ({ name, setName, clg, setClg }) => {
  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      // Navigate to the selected category
      navigate(`/quiz/${category}`);
    }
  };

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 30 }}> Welcome to My Quiz</span>

        <div className='settings_select'>
          {error && <ErrorMessage >Please Fill all the fields</ErrorMessage>}
          <TextField
  style={{ marginBottom: 25 }}
  label='Enter your Name'
  variant='outlined'
  onChange={(e) => setName(e.target.value)}
/>
<TextField
  style={{ marginBottom: 25 }}
  label='Enter your College'
  variant='outlined'
  onChange={(e) => setClg(e.target.value)}
/>

          <TextField
            select
            label='Select Category'
            variant='outlined'
            onChange={(e) => setCategory(e.target.value)}
            style={{ marginBottom: 30 }}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src='undraw_quiz_nlyh.svg' className='banner' alt='Quiz Img' />
    </div>
  );
};

export default Home;