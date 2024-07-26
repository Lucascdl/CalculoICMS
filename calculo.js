function getCostPrice() {
    let costPrice;
    do {
        costPrice = parseFloat(prompt("Insira o preço do produto:"));
        if (isNaN(costPrice) || costPrice <= 0) {
            alert("Insira um valor maior que 0.");
        }
    } while (isNaN(costPrice) || costPrice <= 0);
    return costPrice;
}

function calculateFinalPrice(costPrice, icmsRate) {
    return costPrice * (1 + icmsRate / 100);
}

function displayFinalPrice(finalPrice) {
    alert(`O preço final do produto com ICMS é: R$ ${finalPrice.toFixed(2)}`);
}

function main() {
    const finalPrice = calculateFinalPrice(getCostPrice(), 21);
    displayFinalPrice(finalPrice);
}

main();