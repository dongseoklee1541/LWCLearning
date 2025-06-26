import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = "salesforce Korea"
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }

    @track address={
        city:'seoul',
        postcode:3008,
        country:'Korea'
    }

    trackHandler(event){
        this.address.city = event.target.value
    }

    users = ["john", "smith", "nik"]
    num1 = 10
    num2 = 20

    get firstUser(){
        return this.users[0].toUpperCase()
    }

    get mutiply(){
        return this.num1 * this.num2
    }
}