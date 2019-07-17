import React from "react";
import PortfolioItem from "./portfolio-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = (props) =>{
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id} className="portfolio-item-thumb"> 
                <div className="portfolio-thumb-img"> 
                    <img src={portfolioItem.thumb_image_url} />
                </div>

                <div className="text-content">
                    <div className="title">{portfolioItem.name}</div>
                    <div className="description"><i class="fas fa-chevron-right"></i> {portfolioItem.description}</div>
                    <div className="url"><i class="fas fa-chevron-right"></i> {portfolioItem.url}</div>
                    <div className="actions">
                        <a className="edit-icon" activeClassName="edit-icon-active" onClick={() => props.handleEditClick(portfolioItem)}>
                            <FontAwesomeIcon icon="edit"/>
                        </a>
                        <a className="delete-icon" onClick={() => props.handleDeleteClick(portfolioItem)}>
                            <FontAwesomeIcon icon="trash"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    });

    return <div className="portfolio-sidebar-list-wraper">{portfolioList}</div>
}

export default PortfolioSidebarList;