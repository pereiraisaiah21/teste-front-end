import React, { useContext } from "react";
import StoreData from "../../../StoreData";
import FooterListPages from "./FooterListPages";

import Elo from "../../../images/footer/cards/elo.png";
import Visa from "../../../images/footer/cards/visa.png";
import Master from "../../../images/footer/cards/master.png";
import Bullet from "../../../images/footer/cards/bullet.png";
import Diners from "../../../images/footer/cards/diners.png";
import Amex from "../../../images/footer/cards/amex.png";
import Lets from "../../../images/footer/lets.png";
import Phone from "../../../images/footer/phone.png"

import styles from "../Footer.module.scss";

/**
 * 
 * @returns 
 */

function FooterList () {

    const {storeDataValues} = useContext( StoreData );

    const footerLists = [
        {
            nameSection : "ASSINATURA",
            pages : [
                {
                    description : "PARCEIROS",
                    url : "",
                    icon : "",
                    image : "",
                    id : "partners"
                }
            ]
        },
        {
            nameSection : "INSTITUCIONAL",
            pages : [
                {
                    description : "Quem somos",
                    url : "",
                    icon : "",
                    image : ""
                },
                {
                    description : "Política de privacidade",
                    url : "",
                    icon : "",
                    image : ""
                },
                {
                    description : "Política comercial",
                    url : "",
                    icon : "",
                    image : ""
                },
                {
                    description : "Política de devolução",
                    url : "",
                    icon : "",
                    image : ""
                },
                {
                    description : "Regras de frete",
                    url : "",
                    icon : "",
                    image : ""
                },
            ]
        },
        {
            nameSection : "ATENDIMENTO",
            pages : [
                {
                    description : "Fale conosco",
                    url : "",
                    icon : "",
                    image : ""
                },
                {
                    description : storeDataValues.phone,
                    url : "",
                    icon : Phone,
                    image : ""
                },
                {
                    description : storeDataValues.email,
                    url : "",
                    icon : "",
                    image : ""
                },
                {
                    description : "Trabalhe conosco",
                    url : "",
                    icon : "",
                    image : ""
                },
            ]
        },
        {
            nameSection : "FORMAS DE PAGAMENTO",
            pages : [
                {
                    description : "Elo",
                    url : "",
                    icon : "",
                    image : Elo,
                    id : "elo"
                },
                {
                    description : "Visa",
                    url : "",
                    icon : "",
                    image : Visa,
                    id : "visa"
                },
                {
                    description : "Master",
                    url : "",
                    icon : "",
                    image : Master,
                    id : "master"
                },
                {
                    description : "Boleto",
                    url : "",
                    icon : "",
                    image : Bullet,
                    id : "bullet"
                },
                {
                    description : "Diners",
                    url : "",
                    icon : "",
                    image : Diners,
                    id : "dinner"
                },
                {
                    description : "Amex",
                    url : "",
                    icon : "",
                    image : Amex,
                    id : "amex"
                },
            ],
            style : " img"
        },
        {
            nameSection : "SEGURANÇA",
            pages : [
                {
                    description : "Lets Encrypt",
                    url : "",
                    icon : "",
                    image : Lets,
                    id : "lets"
                }
            ],
            style : " img"
        }
    ];

    return (

        <div className={styles.__options__box}>
        {
            footerLists.map( ( section, key ) => {
                return (
                    <React.Fragment key={key}>
                        {
                            section.style !== undefined
                            ?
                            <ul className={styles.__options__list} key={key}>
                                <span className={styles.__options__title}>
                                    {section.nameSection}
                                </span>
                                <FooterListPages pages={section.pages} />
                            </ul>
                            :
                            <ul className={styles.__options__listImage} key={key}>
                            <span className={styles.__options__title}>
                                {section.nameSection}
                            </span>
                            <FooterListPages pages={section.pages} />
                        </ul>
                        }
                    </React.Fragment>
                )
            })
        }
        </div>
    );
}

export default FooterList;