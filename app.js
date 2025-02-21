import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let values = [];
const PORT = 3000;


//Launch Home page on Init
app.get('/', (req, res) => {
    res.render('home');
})

//Send to Submitted page and populate array with values filled in.
app.post("/submitted", (req, res) =>{

    if(req.body.fname == "" || req.body.lname == "" || req.body.email == "")
    {
        res.send(
            `
            <h1> Invalid, please enter vaild entries </h1> 
            <br>
            <a href="/" class="button-style"> Back to Home </a>
            `
        )
        return;
    }

    values.push(req.body)
    res.send(
        `<form action="home" method="get"> 
            <h3> Thanks for submitting! <h3>
            <button class="button-style" href="#" role="button"> Back to home Page </button>
        </form>`
      );

    
})

app.get('/submitted', (req, res) => {
    res.render("submitted.ejs")
})



//Send BACK to home page from submitted page
app.get('/home', (req, res) => {
    res.render("home.ejs")
})

//Dynamically generate admin page for viewing users who filled in data.
app.get("/admin-contacts", (req, res) => {

    if(values == "")
    {
        res.send(`
            <h1> Admin Contacts </h1>
            <p> Nothing to display yet! </p>
            <br>
            <a href="/" class="button-style"> Back to Home </a> 
            `);
        return;
    }

    let applyToPage = `<h1> Admin Contacts </h1>`;
    let date = new Date();
    for(let items of values)
    {
        applyToPage += '<div>';
        for (let [key, value] of Object.entries(items))
            {
              let format = key;
              applyToPage += `<p><strong>${format}:</strong> ${value}</p>`;
            }
        
        applyToPage += `<p><strong> Date Submitted: </strong> ${date} </p>`;
        applyToPage += "</div>";
    }

    applyToPage += `<br> <a href="/" class="button-style"> Back to Home </a>`;
  
    res.send(applyToPage);
  });

 


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
