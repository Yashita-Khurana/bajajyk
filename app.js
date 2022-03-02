const express = require('express');
const app = express();
app.use(express.json());

app.post("/bfhl",(req,res)=> {
    const {data} = req.body;
    const numElements = [];
    const alpha = [];
    const characterRegex = /^[a-zA-Z]{1,}$/;
    const numberRegex = /^[0-9]{1,}$/;

    data.map((item) => {
        if(numberRegex.test(item))
        {
            numElements.push(item);
        }
        else if(characterRegex.test(item))
        {
            alpha.push(item);
        }
    });

    const result = {
        isSuccess : "true",
        user_id : "yashita_khurana_08112000",
        email : "yashita1109.cse19@chitkara.edu.in",
        roll_number : "1910991109",
        numbers : numElements ,
        alphabets : alpha
    };

    res.status(200).send(result);

});

const port = 8000;
app.listen(port,()=> {
    console.log(`app running on port ${port}`);
});
