let login = "", senha, qtdHA = 0, totalCompraHA = 0, valor = 0, totalGeral = 0
let cesta, qtdThor = 0, totalCompraThor = 0, qtdHulk = 0, totalCompraHulk = 0
let qtdHF = 0, totalCompraHF = 0, qtdCA = 0, totalCompraCA = 0, qtdCM = 0, totalCompraCM = 0
let main, section, article, div, h3, p1, p2, input, span, aLink, footer, h2, p3, span2
let usr = []
let snh = []

let produto = []
if(localStorage.prodArr){
    produto = JSON.parse(localStorage.getItem('prodArr'))
}
let cod = []
if(localStorage.codArr){
    cod = JSON.parse(localStorage.getItem('codArr'))
}
let qtd = []
if(localStorage.qtdArr){
    qtd = JSON.parse(localStorage.getItem('qtdArr'))
}
let totalCompra = []
if(localStorage.totCompArr){
    totalCompra = JSON.parse(localStorage.getItem('totCompArr'))
}
let preco = []
if(localStorage.precoArr){
    preco = JSON.parse(localStorage.getItem('precoArr'))
}
let link = []
if(localStorage.linkArr){
    link = JSON.parse(localStorage.getItem('linkArr'))
}


function getDados(){
    if(localStorage.prodArr){
        produto = JSON.parse(localStorage.getItem('prodArr'))
    }
    let prod = document.querySelector('#produto').value
    produto.push(prod)
    localStorage.prodArr = JSON.stringify(produto)
    document.getElementById('produto').value = ''

    if(localStorage.precoArr){
        preco = JSON.parse(localStorage.getItem('precoArr'))
    }
    let prec = document.querySelector('#preco').value
    preco.push(parseFloat(prec.replace(',' , '.')))
    localStorage.precoArr = JSON.stringify(preco)
    document.getElementById('preco').value = ''

    if(localStorage.codArr){
        cod = JSON.parse(localStorage.getItem('codArr'))
    }
    let codig = document.querySelector('#codigo').value
    cod.push(codig)
    localStorage.codArr = JSON.stringify(cod)
    document.getElementById('codigo').value = ''

    if(localStorage.linkArr){
        link = JSON.parse(localStorage.getItem('linkArr'))
    }
    let lnk = document.querySelector('#linkAmazon').value
    link.push(lnk)
    localStorage.linkArr = JSON.stringify(link)
    document.getElementById('linkAmazon').value = ''

    if(localStorage.qtdArr){
        qtd = JSON.parse(localStorage.getItem('qtdArr'))
    }
    qtd.push(0)
    localStorage.qtdArr = JSON.stringify(qtd)

    if(localStorage.totCompArr){
        totalCompra = JSON.parse(localStorage.getItem('totCompArr'))
    }
    totalCompra.push(0)

    alert("Dados gravados com sucesso!")
}


main = document.createElement('main')
main.setAttribute('class', 'container')
document.body.append(main)
section = document.createElement('section')
section.setAttribute('class', 'products-container')
main.append(section)
for(i in produto){
    article = document.createElement('article')
    article.setAttribute('class', 'card')
    section.append(article)
    div = document.createElement('div')
    div.setAttribute('class', 'product-image')
    div.setAttribute('id', 'img-' + i)
    article.append(div)
    document.getElementById('img-' + i).style.backgroundImage = 'url(imagens/img' + i + '.jpg'
    h3 = document.createElement('h3')
    h3.setAttribute('id', 'nome' + i)
    h3.innerHTML = produto[i]
    article.append(h3)
    p1 = document.createElement('p')
    p1.innerHTML = 'Qtd: '
    article.append(p1)
    input = document.createElement('input')
    input.setAttribute('type', 'number')
    input.setAttribute('value', '1')
    input.setAttribute('min', '1')
    input.setAttribute('max', '10')
    input.setAttribute('id', 'qtd-' + i)
    p1.append(input)
    article.append(p1)
    p2 = document.createElement('p')
    p2.innerHTML = 'R$ '
    span = document.createElement('span')
    span.setAttribute('id', cod[i])
    span.setAttribute('class', 'bold')
    span.innerHTML = preco[i].toFixed(2).replace('.', ',')
    p2.append(span)
    article.append(p2)
    aLink = document.createElement('a')
    aLink.setAttribute('onclick', "compra(" + "'" + 'qtd-' + i + "'" + ',' + "'" + cod[i] + "'" + ',' + i + ")")
    aLink.setAttribute('class', 'btn')
    aLink.setAttribute('href', 'http://www.amazon.com.br/' + link[i])
    aLink.setAttribute('target', '_blank')
    aLink.innerHTML = 'Comprar'
    article.append(aLink)
}
footer = document.createElement('footer')
footer.setAttribute('id', 'rodape')
document.body.append(footer)
h2 = document.createElement('h2')
h2.innerHTML = 'Informações sobre o Site'
footer.append(h2)
p3 = document.createElement('p')
p3.innerHTML = '&copy 2024'
footer.append(p3)
span2 = document.createElement('span')
span2.setAttribute('class', 'bold')
span2.innerHTML = 'Loja dos Nerds'
p3.append(span2)
function criaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))        
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    let novoUsr = prompt("Login")
    usr.push(novoUsr)
    localStorage.usrArr = JSON.stringify(usr)
    let novaSnh = prompt("senha")
    snh.push(novaSnh)
    localStorage.snhArr = JSON.stringify(snh)
    if(usr.includes(novoUsr) && snh.includes(novaSnh)){
        alert("Login criado com Sucesso!")
    }else{
        alert("Login não pode ser criado!")
    }
}

function abreTelaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    login = prompt('Login: ')
    senha = prompt("Senha: ")
    let indUsr = usr.indexOf(login)
    if(usr[indUsr] == login && snh[indUsr] == senha){
        document.getElementById('log').innerHTML = `Bem-vindo, ${login}`
    }else{
        alert("Digite um usuário/senha válidos!\nOu crie um login no link ao lado")
    }
}

function compra(qtdId, produto, posArr){
    if(localStorage.posArr){
        qtd[posArr] = parseInt(document.getElementById(qtdId).value)
    }else{
        localStorage.posArr = JSON.stringify(qtd)
    }
    totalCompra[posArr] = qtd[posArr] * parseFloat(document.getElementById(produto).innerText.replace(',','.'))
    localStorage.qtdArr = JSON.stringify(qtd)
    localStorage.totComp = JSON.stringify(totalCompra)
}

function calculaCesta(){
    if(usr.includes(login)){
        let textoCarrinho = ''
        for(i in qtd){
            if(qtd[i] > 0){
                totalGeral += totalCompra[i]
                textoCarrinho += qtd[i] + " x R$" + preco[i].toFixed(2).replace('.', ',') + " - Boneco " + document.getElementById("nome" + i).innerText + "R$ " + totalCompra[i].toFixed(2).replace('.', ',') + "\n"
            }
        }
        
        
        if(totalGeral > 0){
            alert(`${textoCarrinho}        
        _______________________________________________
        Total da compra                     R$${totalGeral.toFixed(2).replace('.', ',')}
        `)
            let text = "Confirme ou cancele sua compra\nPressione Ok para comprar ou cancel para desistir da compra"
            if(confirm(text) == true){
                alert("Compra efetuada com sucesso!")
                for(i in qtd){
                    qtd[i] = 0
                }
                localStorage.qtdArr = JSON.stringify(qtd)
                window.location.reload()
            }else{
                alert("Sua compra não foi realizada!")
                totalGeral = 0
            }
        }else{
            alert("Carinho vazio! ")
        }
    }else{
        alert('Você não está logado!')
    }
}