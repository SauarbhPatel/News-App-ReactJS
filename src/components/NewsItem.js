import React from 'react'  

const NewsItem = (props)=>{ 
        let {title,description,imageUrl,newsUrl,author,date,source} = props; 
        return (
            <div>
                <div className="card mt-3" >
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
                    <span className=" badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span></div>
                    <img style={{width:"413px",height:'232px'}} src={!imageUrl?"https://i.ytimg.com/vi/hk6JTu26gTI/hqdefault.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
