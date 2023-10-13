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
    Chemistry:0,
    Math:1,
    Biology:2,
    Economics:3,
}

export const getCode=(str)=>{
    if(str.includes("Math")){
        return 1;
    }else if(str.includes("Chemistry")){
        return 0;
    }else if(str.includes("Biology")){
        return 2;
    }else if(str.includes("Economics")){
        return 3;
    }
}