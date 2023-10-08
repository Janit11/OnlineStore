const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express()
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cors({origin:true, credentials: true}));

const stripe = require("stripe")("sk_test_51Nyt6bBkdQMw92asvhY27mYmm8Ntv8FSLeBf0J5ElkosLfq2xdXqqhcLwMlkinBCpmFaYFlmVdsBRphqmue7vnbZ00cZEnwwDK");

app.post("/checkout", async(req, res, next) =>{
    try{
        const session = await stripe.checkout.session.create({
            line_items: req.body.items.map((item) =>({
                currency: "cad", 
                product_data: {
                    name: item.name,
                    images: [item.product]
                },
                unit_amount: item.price
            })),
            mode: "payment",
            success_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/success.html",
        });
    } catch (error){

    }
})
