res=(txt, s)=>
    {
        let result=""
        for (let i = 0; i < txt.length; i++)
        {
            let char = txt[i];
            if (char.toUpperCase(txt[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }
