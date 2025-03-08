export default function validateForm(data)
{
    //Init Errors array
    const errors = [ ];


    //Check First Name
    if(!data.fname || data.fname.trim() === "")
    {
        errors.push("First name required");
    }

    //Check Last Name
    if(!data.lname || data.lname.trim() === "")
    {
        errors.push("Last name required");
    }

    //Check Job Title
    if(!data.status || data.status.trim() === "")
    {
        errors.push("Job Title (if applicable) required, else type (NONE)");
    }

    //Check Company Name
    if(!data.company || data.company.trim() === "")
    {
        errors.push("Company name (if applicable) required, else type (NONE)");
    }

    //Check LinkedIn url or Username
    if(!data.SocialMedia || data.SocialMedia.trim() === "")
    {
        errors.push("LinkedIn Username or URL required")
    }
    
    //Check email
    if (!data.email || data.email.trim() === "" || 
        data.email.indexOf("@") === -1 ||
        data.email.indexOf(".") === -1) {
        errors.push("Email is required and must be valid");
    }

    //Check if Introduced is checked (Select option method)
    if (!data.HowMet) {
        errors.push("Select an option of How We Met");
    } else {
        const validOptions = [ "School Together", "Worked Together", "Public Event", "Friend of Friend" ];
        if (!validOptions.includes(data.HowMet)) {
            errors.push("Go away, evildoer!");
        }
    }

    //Return is valid if errors has nothing else return errors page.
    return {
        isValid: errors.length === 0,
        errors
    }
}