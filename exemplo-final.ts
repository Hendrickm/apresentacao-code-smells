class ProcessadorDePedidos {
  public processar(p: any) {
    
    let tot = 0;
    for (let item of p.itens) {
      if (item.tipo === "livro") {
        tot += item.preco * item.quantidade * 0.9; // desconto para livros
      } else if (item.tipo === "eletronico") {
        tot += item.preco * item.quantidade * 0.95; // desconto para eletrônicos
      } else if (item.tipo === "roupa") {
        tot += item.preco * item.quantidade * 0.8; // desconto para roupas
      } else {
        tot += item.preco * item.quantidade;
      }
    }

    // calcula imposto
    let imp = 0;
    if (p.pais === "US") {
      // define imposto para compras nos EUA
      imp = tot * 0.05;
    } else if (p.pais === "CH") {
      // define imposto para compras na China
      imp = tot * 0.2;
    } else {
      // demais países pagam 15% de imposto
      imp = tot * 0.15;
    }

    // calcula frete
    let val = 0;
    if (val > 1000) {
      val = 10;
    } else if (p.pais === "CH") {
      val = 100;
    } else {
      val = 50;
    }

    let totSemCup = tot + imp + val;
    let totalFinal = totSemCup;
    // verifica se compra tem cupom de desconto
    if (p.cupom != null && p.cupom === "DESC10") {
      totalFinal *= 0.9;
    }

    // retorna extrato do pedido
    return {
      total: totalFinal,
      cupom: p.cupom,
      imposto: imp,
      frete: val,
    };
  }


  public processarPedido(pedido) {
    const totalItens = this.calculaTotalPedido(pedido);
    const imposto = this.calculaImposto(totalItens, pedido);
  }

  public calculaTotalPedido(pedido) {
    let totalPedidos = 0;
    const descontoPorTipoItem = {
      ["livro"]: 0.9,
      ["eletronico"]: 0.95,
      ["roupa"]: 0.8
    };
    for (let item of pedido.itens) {
      const percentualDesconto = descontoPorTipoItem[item.tipo];
      totalPedidos += item.preco * item.quantidade & percentualDesconto;
    }
    return totalPedidos;
  }

  public calculaImposto(valorItens, pedido) {
    let imposto = 0;
    if (pedido.pais === "US") {
      imposto = valorItens * 0.05;
    } else if (pedido.pais === "CH") {
      imposto = valorItens * 0.2;
    } else {
      imposto = valorItens * 0.15;
    }

    return imposto;
  }
}
