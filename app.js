const express = require('express')
const app = express();
app.use(express.json());

var Linkedin = {

    "status": true,
    "Notification": [
        {
            "title": "new Message1",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "bajarildi": false
        },
        {
            "title": "new Message2",
            "img": "https://www.kindpng.com/picc/m/178-1785357_transparent-city-lights-png-profile-picture-background-circle.png",
            "bajarildi": false
        },
        {
            "title": "new Message3",
            "img": "https://e7.pngegg.com/pngimages/232/834/png-clipart-light-city-city-lights-purple-building-thumbnail.png",
            "bajarildi": false
        },
        {
            "title": "new Message4",
            "img": "https://png.pngtree.com/png-clipart/20210309/original/pngtree-kuwait-national-day-with-sunset-scene-and-beautiful-city-circle-png-png-image_5837118.png",
            "bajarildi": false
        },
        {
            "title": "new Message5",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuQj5yft_oN3bh5up8Ej4nYJWhdAY78LpsQ&usqp=CAU",
            "bajarildi": false
        },
        {
            "title": "new Message6",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "bajarildi": false
        },
        {
            "title": "new Message7",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "bajarildi": false
        },
        {
            "title": "new Message8",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "bajarildi": false
        },
        {
            "title": "new Message9",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "bajarildi": false
        },
        {
            "title": "new Message10",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "bajarildi": false
        },
        {
            "title": "new Message11",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "bajarildi": false
        },

    ],
    "Home": [
        {
            "profileImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "title": "Sanches",
            "profession": "Flutter developer",
            "commentsNumber": "25 comments",
            "Like": 54,
            "Comments": "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ... see more"

        },
        {
            "profileImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "title": "Salah",
            "profession": "Flutter developer",
            "commentsNumber": "32 comments",
            "Like": 54,
            "Comments": "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ... see more"

        },
        {
            "profileImg": "https://www.kindpng.com/picc/m/178-1785357_transparent-city-lights-png-profile-picture-background-circle.png",
            "title": "Neyman",
            "profession": "Flutter developer",
            "commentsNumber": "65 comments",
            "Like": 54,
            "Comments": "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ... see more"

        },
        {
            "profileImg": "https://png.pngtree.com/png-clipart/20210309/original/pngtree-kuwait-national-day-with-sunset-scene-and-beautiful-city-circle-png-png-image_5837118.png",
            "title": "Elif",
            "profession": "Flutter developer",
            "commentsNumber": "85 comments",
            "Like": 54,
            "Comments": "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ... see more"

        },
        {
            "profileImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "title": "Alex",
            "profession": "Flutter developer",
            "commentsNumber": "5 comments",
            "Like": 54,
            "Comments": "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ... see more"

        },
        {
            "profileImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "title": "Riley",
            "profession": "Flutter developer",
            "commentsNumber": "45 comments",
            "Like": 54,
            "Comments": "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ... see more"

        },
        {
            "profileImg": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
            "title": "Alexey",
            "profession": "Flutter developer",
            "commentsNumber": "36 comments",
            "Like": 54,
            "Comments": "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ... see more"

        },
        {
            "profileImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GUDwHChr7e6YqvVyqj8IX7FjnYxDlze_zg&usqp=CAU",
            "title": "Veronica",
            "profession": "Flutter developer",
            "commentsNumber": "8 comments",
            "Like": 54,
            "Comments": "Hello, I am looking for a new career opportunity and would appreciate your support. Thanks in advance for any contact recommendation, advice, or ... see more"

        },
    ],
    "My Network": [
        {
            "title": "Veronica",
            "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
        },
        {
            "title": "Alexey",
            "img": "https://media.istockphoto.com/id/1435686874/photo/pensive-clever-indian-or-arabian-guy-student-or-freelancer-using-laptop-working-or-studying.webp?b=1&s=170667a&w=0&k=20&c=VCKT7t6UliBzLlHRrjYRyp_40KzIzziYdUWyFe9c24A="
        }, {
            "title": "Michael",
            "img": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        },
        {
            "title": "Riley",
            "img": "https://plus.unsplash.com/premium_photo-1669782051589-4f828261b1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        },
        {
            "title": "Alex",
            "img": "https://media.istockphoto.com/id/1362448780/photo/candid-portrait-of-early-30s-indian-man-standing-outdoors.webp?b=1&s=170667a&w=0&k=20&c=7Wkh3PfSqfBFM8JP2cgTMVepDuG83n8AyA7BwkiDwD8="
        },
        {
            "title": "Jessica",
            "img": "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fHww&w=1000&q=80"
        },
        {
            "title": "Elif",
            "img": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
        },
        {
            "title": "Neyman",
            "img": "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        },
        {
            "title": "Alexis",
            "img": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        },
        {
            "title": "Sanches",
            "img": "https://media.istockphoto.com/id/1435686874/photo/pensive-clever-indian-or-arabian-guy-student-or-freelancer-using-laptop-working-or-studying.webp?b=1&s=170667a&w=0&k=20&c=VCKT7t6UliBzLlHRrjYRyp_40KzIzziYdUWyFe9c24A="
        },

    ],
}

var users = []


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    next();
});

app.post("/register", (req, res) => {
    const { email, password, f_name, l_name } = req.body;
    if (!(email && password)) {
        return res.status(400).send({
            "message": "Email yoki password xato"
        });
    }

    // Check if user already exists
    const user = "Flutter@gmail.com";
    if (user === email) {
        return res.send({
            "isRegistered": true,
            "message": "Siz allaqachon ro'yxatdan o'tgansiz"
        });
    }

    // Register new user
    users.push(req.body);
    return res.status(201).json({
        "message": "User successfully registered",
        "access_token": "asdfgnhmjnbvcxbnvcbncxvbcxvnbmbv"
    });
});






app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!(email && password)) {
        return res.status(400).send({
            "message": "Email yoki password xato"
        });
    }

    // Check user credentials
    const user = "d@gmail.com";
    const userPassword = "12345";

    if (user === email) {
        // Login
        if (password === userPassword) {
            return res.status(200).json({
                "message": "User successfully logged in",
                "access_token": "sadfgghdsfghjgffgahjkljhgf",
            });
        } else {
            return res.status(400).json({
                "message": "Email yoki parol xato",
            });
        }
    } else {
        return res.status(409).json({
            "message": "Siz hali ro'yxatdan o'tmagansiz",
        });
    }
});










app.get('/users', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    res.send(users);
});

app.put('/user/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    const { email, password, f_name, l_name } = req.body;
    console.log(req.params.id);
    var isEdited = false;
    for (let index = 0; index < users.length; index++) {
        if (users[index]["email"] === req.params.id) {
            console.log("hello")
            users[index] = req.body;
            isEdited = true;
        } else {
            isEdited = false;
        }
    }
    if (isEdited) {
        res.status(200).json({
            "message": "User info updated"
        });
    } else {
        res.status(200).json({
            "message": "User info not updated",
            "error": "12335566532g3df"
        });
    }
});



app.get('/Linkedin', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-type');
    res.send(Linkedin);
});

HOST = "192.168.1.37";
//192.168.42.184
// 192.168.1.42

PORT = 4000;

app.listen(PORT, () => {
    console.log(`YOUR SERVER RUNNING ON http://${HOST}:${PORT}/Linkedin`);
});
