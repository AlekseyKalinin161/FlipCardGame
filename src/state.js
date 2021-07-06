
export const arrayCard =   [
    {
        id: 1,
        numberCard: 1,
        disabled: false,
        state:"front",
        cardFront: "",
        cardBack: ""
    },
    {
        id: 2,
        numberCard: 2,
        disabled: false,
        state:"front",
        cardFront: "",
        cardBack: ""
    },
    {
        id: 3,
        numberCard: 3,
        disabled: false,
        state:"front",
        cardFront: "",
        cardBack: ""
    },
    {
        id: 4,
        numberCard: 4,
        disabled: false,
        state:"front",
        cardFront: "",
        cardBack: ""
    },
    {
        id: 5,
        numberCard: 1,
        disabled: false,
        state:"front",
        cardFront: "",
        cardBack: ""
    },
    {
        id: 6,
        numberCard: 2,
        disabled: false,
        state:"front",
        cardFront: "",
        cardBack: ""
    },
    {
        id: 7,
        numberCard: 3,
        disabled: false,
        state:"front",
        cardFront: "",
        cardBack: ""
    },
    {
        id: 8,
        numberCard: 4,
        disabled: false,
        state:"front",
        cardFront: "",
        cardBack: ""
    }
]

export let idArray = [];

export function rerender(setter,targetArray){
    setter([...targetArray]);
}
