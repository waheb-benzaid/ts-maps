// import { Company } from "./Company"
// import { User } from "./User"

//Instructions to every other class on how they can be an argument to 'addMarker'
export interface Mappable{
    location : {
        lat : number,
        lng : number
    }
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(idDiv : string) {
        this.googleMap = new google.maps.Map(document.getElementById(idDiv) as HTMLElement,{
            zoom : 1,
            center : {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable) : void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng : mappable.location.lng
            }
        })
    }

    // addCompanyMarker(company:Company) : void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng : company.location.lng
    //         }
    //     })

    // }



}