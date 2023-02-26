import styled from 'styled-components';

export const FooterBox = styled.div`
    height: 130vh;
    width: 100%;
    background-color: #f3f5f7;
    hr{
        margin: 0rem 9rem 0rem 9rem;
        background-color: #848484;
    }
`
export const FooterFirstHalf = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap:50px;
    margin-left: 7%;
    margin-right: 7%;
    padding: 55px;
    padding-bottom: 0;
`

export const UsefulLinks = styled.div`
    .footer--headings{
        font-size: 16px;
        color: #121212;
        font-weight: bold;
    }
    li{
        list-style: none;
        color: #848484;
        font-weight: lighter;
        font-size: 14px;
        margin-bottom: 10px;
    }
`
export const Partners = styled.div`
    .footer--headings{
        font-size: 16px;
        color: #121212;
        font-weight: normal;
    }
    li{
        list-style: none;
        color: #848484;
        font-weight: lighter;
        font-size: 14px;
        margin-bottom: 10px;
    }
`
export const NeedHelp = styled.div`
    .footer--headings{
        font-size: 16px;
        color: #121212;
        font-weight: normal;
    }
    li{
        list-style: none;
        color: #848484;
        font-weight: lighter;
        font-size: 14px;
        margin-bottom: 10px;
    }
`
export const DownloadApp = styled.div`
    h2{
        font-family: 'Playfair Display', serif;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    img{
        margin-bottom: 10px;
        height: 60px;
        width: 165px;
    }
`
export const FooterSecondHalf = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin-left: 7%;
    margin-right: 7%;
    padding: 55px;
    grid-gap: 50px;
`

export const PopularCategories = styled.div`
    .titles{
        font-size: 16px;
        color: #121212;
        font-weight: normal;
        margin-bottom: 10px;
    }

    p{
        color: #848484;
        font-weight: lighter;
        font-size: 14px;
        line-height: 1.4;
    }
`
export const PopularBrands = styled.div`
    .titles{
        font-size: 16px;
        color: #121212;
        font-weight: normal;
        margin-bottom: 10px;
    }

    p{
        color: #848484;
        font-weight: lighter;
        font-size: 14px;
        line-height: 1.4;
    }
`

export const Cities = styled.div`
    .titles{
        font-size: 16px;
        color: #121212;
        font-weight: normal;
        margin-bottom: 10px;
    }

    p{
        color: #848484;
        font-weight: lighter;
        font-size: 14px;
        line-height: 1.4;
    }
`
export const FooterThirdHalf = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 10%;
    margin-right: 7%;
    grid-gap: 20px;
    .titles{
        font-size: 16px;
        color: #121212;
        font-weight: normal;
        margin-bottom: 10px;
    }
`

export const FooterLeft = styled.div`
    img{
        height: 60px;
        width: 80px;
        padding: 4px;
    }
`

export const FooterRight = styled.div`
    img{
        height: 50px;
        width: 50px;
        padding: 5px;
    }
`

export const FooterFourthHalf = styled.div`
    display: flex;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 90px;

    .leftside, .rightside{
        display: flex;
        color: #848484;
        font-weight: lighter;
        font-size: 13px;
        padding-left: 190px;

        h3{
            padding-right: 10px;
        }
    }
`