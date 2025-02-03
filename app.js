import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

let values = [];
const PORT = 3000;


//Launch Home page on Init
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
})

//Send to Submitted page and populate array with values filled in.
app.post("/submitted", (req, res) =>{
    values.push(req.body)
    res.send(
        `<form action="home" method="get"> 
            <h3> Thanks for submitting! <h3>
            <button class="button-style" href="#" role="button"> Back to home Page </button>
        </form>`
      );
})

app.get('/submitted', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/submitted.html`)
})



//Send BACK to home page from submitted page
app.get('/home', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`)
})

//Dynamically generate admin page for viewing users who filled in data.
app.get("/admin/contacts", (req, res) => {

    let applyToPage = "";
    for(let items of values)
    {
      applyToPage += 
      `<p><strong>Name:</strong> ${items.fname} ${items.lname}
       <br>
        <p><strong>Job Title:</strong> ${items.status}
        <p><strong>Company:</strong> ${items.company}
        <p><strong>How We met:</strong> ${items.Introduced}
        <p><strong>Other-not-Specified/More-Detail:</strong> ${items.other}
        <p><strong>Email:</strong> ${items.email}
        <p><strong>LinkedIn:</strong> ${items.linkedIn}`;
    }
  
    res.send(applyToPage);
  });



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
