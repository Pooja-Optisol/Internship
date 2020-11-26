import React, { Component } from 'react';
class Gallery extends Component {
    render(){
        let alternate = 'https://github.com/krishanpooja/Internship/blob/ES6/app/components/alternate.jpg';
        return(
            <div>
            {
                this.props.items.map((item,index) => {
                    let {title,imageLinks,infoLink} = item.volumeInfo;
                    return (
                        <a key={index} 
                        className="book"
                        href={infoLink} 
                        target="_blank"
                        >
                            <img src = {imageLinks!=undefined?imageLinks.thumbnail:alternate} className="book-img"/>
                            <div className="booktext">
                                {title}
                            </div>
                        </a>
                    )
                })
            }</div>
        )
    }
}
export default Gallery;