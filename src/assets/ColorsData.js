export const data = [
    {
        background: '#e4ffc1',
        circle:'#82c52a',
        smalltext:'#286345'
    },
    {
        background: '#fff8de',
        circle:'#ffb211',
        smalltext:'#c78c0f'
    },
    {
        background: '#edfbfb',
        circle:'#62c7c7',
        smalltext:'#1db1ab'
    },
    {
        background: '#F6D8DA',
        circle:'#b74f4f',
        smalltext:'#62c7c7'
    },
    {
        background: '#F6D8DA',
        circle:'#b74f4f',
        smalltext:'blue'
    },
    {
        background: '#F6D8DA',
        circle:'#b74f4f',
        smalltext:'#62c7c7'
    },
]

export const indexes={
    chemistry:0,
    math:1,
    biology:2,
    economics:3,
}

export const getCode=(str)=>{
    if(str.includes("math")){
        return 1;
    }else if(str.includes("chemistry")){
        return 0;
    }else if(str.includes("biology")){
        return 2;
    }else if(str.includes("economics")){
        return 3;
    }
    else return 0;
}