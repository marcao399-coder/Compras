<!doctype html>
<html lang="pt-BR">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#4facfe">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Lista de Compras">
  <title>Lista de Compras</title>
  <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f0f2f5;
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 100%;
            margin: 0 auto;
            background: white;
            min-height: 100vh;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }

        .header {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            padding: 18px 20px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header h1 {
            margin: 0;
            font-size: 22px;
            font-weight: 600;
        }

        /* NOVO: Seletor de mês */
        .month-selector {
            background: rgba(255,255,255,0.1);
            padding: 10px 15px;
            margin-top: 10px;
            border-radius: 8px;
            backdrop-filter: blur(10px);
        }

        .month-selector select {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 6px;
            background: rgba(255,255,255,0.9);
            color: #333;
            font-size: 14px;
            font-weight: 600;
            outline: none;
        }

        .month-selector select:focus {
            border-color: #4facfe;
        }

        .tabs {
            display: flex;
            background: white;
            border-bottom: 2px solid #e1e8ff;
            position: sticky;
            top: 74px;
            z-index: 99;
            overflow-x: auto;
        }

        .tab-button {
            flex: 1;
            min-width: 70px;
            background: transparent;
            border: none;
            padding: 14px 8px;
            font-size: 12px;
            font-weight: 600;
            color: #666;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 3px solid transparent;
            white-space: nowrap;
        }

        .tab-button:hover {
            background: #f8f9ff;
            color: #4facfe;
        }

        .tab-button.active {
            color: #4facfe;
            border-bottom-color: #4facfe;
            background: #f8f9ff;
        }

        .budget-section {
            padding: 20px;
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
            border-bottom: 2px solid #e1e8ff;
        }

        .budget-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 15px;
        }

        .budget-card {
            background: white;
            padding: 18px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border: 2px solid transparent;
            min-height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .budget-card.initial {
            border-color: #4facfe;
        }

        .budget-card.spent {
            border-color: #ff6b6b;
        }

        .budget-card.remaining {
            border-color: #51cf66;
        }

        .budget-label {
            font-size: 12px;
            font-weight: 700;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .budget-card.initial .budget-label {
            color: #4facfe;
        }

        .budget-card.spent .budget-label {
            color: #ff6b6b;
        }

        .budget-card.remaining .budget-label {
            color: #51cf66;
        }

        .budget-input {
            width: 100%;
            border: none;
            background: transparent;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            color: #333;
            outline: none;
            padding: 8px;
        }

        .budget-value {
            font-size: 18px;
            font-weight: 700;
            color: #333;
            padding: 8px;
        }

        .page {
            display: none;
            padding: 15px;
            padding-bottom: 80px;
        }

        .page.active {
            display: block;
        }

        .search-container {
            margin-bottom: 15px;
            position: relative;
        }

        .search-input {
            width: 100%;
            padding: 15px 45px 15px 15px;
            border: 2px solid #e1e8ff;
            border-radius: 12px;
            font-size: 16px;
            background: white;
            outline: none;
            transition: border-color 0.3s ease;
        }

        .search-input:focus {
            border-color: #4facfe;
        }

        .search-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #999;
            font-size: 18px;
        }

        /* Cartão de total por loja */
        .store-total-card {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            padding: 15px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .store-total-label {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 8px;
            opacity: 0.9;
        }

        .store-total-value {
            font-size: 20px;
            font-weight: 700;
        }

        .voucher-info {
            font-size: 11px;
            opacity: 0.8;
            margin-top: 5px;
            font-style: italic;
        }

        .group-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 12px 15px;
            margin: 15px -15px 8px -15px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            position: sticky;
            top: 116px;
            z-index: 10;
        }

        .product-item {
            display: grid;
            grid-template-columns: 35px 1fr 80px 95px 100px;
            gap: 10px;
            align-items: center;
            background: white;
            border: 1px solid #f1f3f4;
            border-radius: 10px;
            padding: 12px;
            margin-bottom: 8px;
            transition: all 0.3s ease;
            font-size: 14px;
        }

        .product-item.purchased {
            background: #e8f5e8;
            border-color: #51cf66;
        }

        .status-icon {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 12px;
            font-weight: bold;
        }

        .status-icon.purchased {
            background: #51cf66;
            color: white;
        }

        .status-icon.empty {
            background: #f1f3f4;
            color: #999;
        }

        .product-info {
            min-width: 0;
            overflow: hidden;
        }

        .product-name {
            font-weight: 600;
            color: #333;
            margin-bottom: 2px;
            font-size: 15px;
            line-height: 1.3;
            word-wrap: break-word;
        }

        .quantity-input, .price-input {
            width: 100%;
            padding: 12px 8px;
            border: 1px solid #ddd;
            border-radius: 8px;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            outline: none;
            height: 42px;
            box-sizing: border-box;
        }

        .quantity-input:focus, .price-input:focus {
            border-color: #4facfe;
        }

        .total-display {
            font-size: 14px;
            font-weight: 700;
            color: #333;
            text-align: center;
            background: #f8f9ff;
            padding: 12px 6px;
            border-radius: 8px;
            border: 1px solid #e1e8ff;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .summary-card {
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
            border: 2px solid #e1e8ff;
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            font-size: 15px;
            padding: 8px 0;
        }

        .summary-row:last-child {
            margin-bottom: 0;
            font-weight: 700;
            font-size: 16px;
            padding-top: 12px;
            border-top: 2px solid #e1e8ff;
        }

        .summary-label {
            color: #666;
            font-weight: 600;
        }

        .summary-value {
            font-weight: 700;
            color: #333;
            font-size: 15px;
        }

        .inline-message {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #51cf66;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 1000;
            font-weight: 600;
            font-size: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .save-button {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255,255,255,0.2);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .save-button:hover {
            background: rgba(255,255,255,0.3);
        }

        @media (max-width: 480px) {
            .product-item {
                grid-template-columns: 30px 1fr 70px 85px 90px;
                gap: 8px;
                padding: 10px;
            }
            
            .tab-button {
                font-size: 11px;
                padding: 12px 4px;
            }
            
            .budget-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            
            .budget-card {
                padding: 15px;
                min-height: 90px;
            }
            
            .budget-input, .budget-value {
                font-size: 16px;
            }
            
            .quantity-input, .price-input {
                height: 38px;
                padding: 10px 6px;
                font-size: 13px;
            }
            
            .total-display {
                height: 38px;
                font-size: 13px;
            }
        }
    </style>
 </head>
 <body>
  <div class="container">
   <header class="header">
    <h1 id="app-title">Lista de Compras</h1>
    <div class="month-selector">
        <select id="month-select" onchange="changeMonth(this.value)">
            <!-- Os meses serão gerados automaticamente pelo JavaScript -->
        </select>
    </div>
    <button class="save-button" onclick="saveAllData()" title="Salvar dados">💾</button>
   </header>
   
   <div class="tabs">
    <button class="tab-button active" onclick="showPage('budget')">Orçamento</button>
    <button class="tab-button" onclick="showPage('nagumo')">Nagumo</button>
    <button class="tab-button" onclick="showPage('assai')">Assaí</button>
    <button class="tab-button" onclick="showPage('sacolao')">Sacolão</button>
    <button class="tab-button" onclick="showPage('summary')">Resumo</button>
   </div>

   <!-- Página Orçamento -->
   <div id="budget-page" class="page active">
    <div class="budget-section">
     <div class="budget-grid">
      <div class="budget-card initial">
       <div class="budget-label">Valor inicial</div>
       <input type="number" class="budget-input" id="initial-budget" placeholder="0,00" step="0.01" min="0">
      </div>
      <div class="budget-card spent">
       <div class="budget-label">Gasto</div>
       <div class="budget-value" id="spent-value">R$ 0,00</div>
      </div>
      <div class="budget-card remaining">
       <div class="budget-label">Sobram</div>
       <div class="budget-value" id="remaining-value">R$ 0,00</div>
      </div>
     </div>
    </div>
   </div>

   <!-- Página Nagumo -->
   <div id="nagumo-page" class="page">
    <div class="search-container">
     <input type="text" class="search-input" id="nagumo-search" placeholder="Buscar produto...">
     <span class="search-icon">🔍</span>
    </div>
    <div class="store-total-card">
        <div class="store-total-label">Total Nagumo</div>
        <div class="store-total-value" id="nagumo-total">R$ 0,00</div>
        <div class="voucher-info">Aceita V.A e V.R</div>
    </div>
    <div class="product-list" id="nagumo-list"></div>
   </div>

   <!-- Página Assaí -->
   <div id="assai-page" class="page">
    <div class="search-container">
     <input type="text" class="search-input" id="assai-search" placeholder="Buscar produto...">
     <span class="search-icon">🔍</span>
    </div>
    <div class="store-total-card">
        <div class="store-total-label">Total Assaí</div>
        <div class="store-total-value" id="assai-total">R$ 0,00</div>
        <div class="voucher-info">Aceita apenas V.A</div>
    </div>
    <div class="product-list" id="assai-list"></div>
   </div>

   <!-- Página Sacolão -->
   <div id="sacolao-page" class="page">
    <div class="search-container">
     <input type="text" class="search-input" id="sacolao-search" placeholder="Buscar produto...">
     <span class="search-icon">🔍</span>
    </div>
    <div class="store-total-card">
        <div class="store-total-label">Total Sacolão</div>
        <div class="store-total-value" id="sacolao-total">R$ 0,00</div>
        <div class="voucher-info">Não aceita vouchers - Apenas Débito/Crédito/Pix</div>
    </div>
    <div class="product-list" id="sacolao-list"></div>
   </div>

   <!-- Página Resumo -->
   <div id="summary-page" class="page">
    <div class="summary-card" id="summary-content"></div>
   </div>
  </div>

  <script>
        // Lista COMPLETA de produtos organizados por loja e grupo
        const storeProducts = {
            nagumo: {
                "Básicos": [
                    { name: "Arroz", variants: [], units: ["kg"] },
                    { name: "Feijão", variants: [], units: ["kg"] },
                    { name: "Açucar", variants: [], units: ["kg"] },
                    { name: "Sal", variants: [], units: ["kg"] },
                    { name: "Farinha Trigo", variants: [], units: ["kg"] },
                    { name: "Maisena", variants: [], units: ["500g"] },
                    { name: "Tapioca", variants: [], units: ["500g"] }
                ],
                "Massas": [
                    { name: "Macarrão Penna", variants: [], units: ["500g"] },
                    { name: "Macarrão Espaguete", variants: [], units: ["500g"] },
                    { name: "Molho Pronto", variants: [], units: ["340g"] }
                ],
                "Óleos e Temperos": [
                    { name: "Óleo Soja", variants: [], units: ["900ml"] },
                    { name: "Azeite", variants: [], units: ["500ml"] },
                    { name: "Óleo Carmelita", variants: [], units: ["900ml"] },
                    { name: "Vinagre", variants: [], units: ["750ml"] },
                    { name: "Sazon Sachê", variants: [], units: ["sachê"] }
                ],
                "Conservas": [
                    { name: "Milho Lata", variants: [], units: ["lata"] }
                ],
                "Bebidas": [
                    { name: "Café", variants: [], units: ["500g"] },
                    { name: "Nescau", variants: [], units: ["400g"] },
                    { name: "Guaraná Zero 2L", variants: [], units: ["2L"] },
                    { name: "Pepsi Zero 2L", variants: [], units: ["2L"] },
                    { name: "Sprite Zero 2L", variants: [], units: ["2L"] }
                ],
                "Laticínios": [
                    { name: "Leite 1L", variants: [], units: ["1L"] },
                    { name: "Margarina", variants: [], units: ["500g"] },
                    { name: "Creme Leite", variants: [], units: ["200g"] },
                    { name: "Leite Condensado", variants: [], units: ["395g"] },
                    { name: "Leite Moça", variants: [], units: ["395g"] }
                ],
                "Condimentos": [
                    { name: "Maionese", variants: [], units: ["500g"] },
                    { name: "Katchp", variants: [], units: ["400g"] },
                    { name: "Mostarda", variants: [], units: ["200g"] }
                ],
                "Pães e Biscoitos": [
                    { name: "Pão Forma", variants: [], units: ["unid"] },
                    { name: "Bisnaguinha", variants: [], units: ["pct"] },
                    { name: "Bolacha Waffer Rech.", variants: [], units: ["pct"] },
                    { name: "Rosq. Côco", variants: [], units: ["pct"] },
                    { name: "Bolacha Maisena", variants: [], units: ["pct"] },
                    { name: "Bolacha Club Social", variants: [], units: ["pct"] }
                ],
                "Utilidades": [
                    { name: "Coador", variants: [], units: ["unid"] },
                    { name: "Ovos 20 unid", variants: [], units: ["20un"] }
                ],
                "Salgadinhos": [
                    { name: "Salgadinho", variants: [], units: ["pct"] },
                    { name: "Pipoca Doce", variants: [], units: ["pct"] },
                    { name: "Salgadinhos", variants: [], units: ["pct"] }
                ],
                "Carnes": [
                    { name: "Toscana granel", variants: [], units: ["kg"] },
                    { name: "Carne Moída (Patinho)", variants: [], units: ["kg"] },
                    { name: "Carne Bife (Cx Mole / Alcatra)", variants: [], units: ["kg"] },
                    { name: "Carne Panela (Paleta)", variants: [], units: ["kg"] }
                ],
                "Frios": [
                    { name: "Mussarela", variants: [], units: ["kg"] },
                    { name: "Presunto", variants: [], units: ["kg"] },
                    { name: "Pão Francês", variants: [], units: ["kg"] }
                ],
                "Frutas": [
                    { name: "Laranja", variants: [], units: ["kg"] },
                    { name: "Banana", variants: [], units: ["kg"] },
                    { name: "Maçã", variants: [], units: ["kg"] },
                    { name: "Manga", variants: [], units: ["kg"] },
                    { name: "Pera", variants: [], units: ["kg"] }
                ],
                "Verduras e Legumes": [
                    { name: "Alfaçe", variants: [], units: ["unid"] },
                    { name: "Tomate", variants: [], units: ["kg"] },
                    { name: "Cebola", variants: [], units: ["kg"] },
                    { name: "Batata", variants: [], units: ["kg"] },
                    { name: "Pepino", variants: [], units: ["kg"] }
                ],
                "Higiene": [
                    { name: "Papel toalha", variants: [], units: ["pct"] },
                    { name: "Papel Hig. 24rl", variants: [], units: ["24rl"] },
                    { name: "Papel Hig. 32rl", variants: [], units: ["32rl"] },
                    { name: "Shampoo", variants: [], units: ["400ml"] },
                    { name: "Desod. Pasta Herbíssimo", variants: [], units: ["90g"] },
                    { name: "Desod. Spray", variants: [], units: ["150ml"] },
                    { name: "Sabonete CLOY", variants: [], units: ["90g"] },
                    { name: "Pasta de Dente", variants: [], units: ["90g"] },
                    { name: "Enxaguante Bucal", variants: [], units: ["500ml"] },
                    { name: "Shampoo Família", variants: [], units: ["400ml"] },
                    { name: "Cotonete", variants: [], units: ["pct"] },
                    { name: "Algodão", variants: [], units: ["pct"] },
                    { name: "Absorvente", variants: [], units: ["pct"] },
                    { name: "Prestobarba Gillete", variants: [], units: ["unid"] }
                ],
                "Limpeza": [
                    { name: "Sabão", variants: [], units: ["1kg"] },
                    { name: "Amaciante", variants: [], units: ["2L"] },
                    { name: "Detergente Ypê", variants: [], units: ["500ml"] },
                    { name: "Desinfetante", variants: [], units: ["1L"] },
                    { name: "Mr Músculo", variants: [], units: ["500ml"] },
                    { name: "Água Sanitária", variants: [], units: ["1L"] },
                    { name: "Pedra Vaso", variants: [], units: ["unid"] }
                ]
            },
            assai: {
                "Congelados": [
                    { name: "Frango Congelado PCT", variants: [], units: ["pct"] },
                    { name: "Calabresa PCT", variants: [], units: ["pct"] },
                    { name: "Toscana PCT", variants: [], units: ["pct"] },
                    { name: "Nuguets PCT", variants: [], units: ["pct"] },
                    { name: "Hamburguer CX", variants: [], units: ["cx"] },
                    { name: "Batata Palito PCT", variants: [], units: ["pct"] },
                    { name: "Salsicha PCT", variants: [], units: ["pct"] },
                    { name: "Legumes Congelados PCT", variants: [], units: ["pct"] }
                ],
                "Laticínios": [
                    { name: "Leite Cx", variants: [], units: ["cx"] },
                    { name: "Iogurte Natural", variants: [], units: ["170g"] },
                    { name: "Iogururte Sabor", variants: [], units: ["170g"] },
                    { name: "Margarina 500g", variants: [], units: ["500g"] },
                    { name: "Requijão pote 400g", variants: [], units: ["400g"] }
                ],
                "Óleos e Conservas": [
                    { name: "Carmelita", variants: [], units: ["900ml"] },
                    { name: "Azeite", variants: [], units: ["500ml"] },
                    { name: "Atum", variants: [], units: ["lata"] }
                ],
                "Ovos e Frios": [
                    { name: "Ovos Cartela 20 unid", variants: [], units: ["20un"] },
                    { name: "Mussarela", variants: [], units: ["kg"] },
                    { name: "Presunto", variants: [], units: ["kg"] },
                    { name: "Peito Frango Def.", variants: [], units: ["kg"] }
                ],
                "Farinhas e Temperos": [
                    { name: "Farinha de Rosca", variants: [], units: ["500g"] }
                ],
                "Salgadinhos e Bebidas": [
                    { name: "Salgadinhos", variants: [], units: ["pct"] },
                    { name: "Guaraná Zero 2L", variants: [], units: ["2L"] },
                    { name: "Pepsi Zero 2L", variants: [], units: ["2L"] },
                    { name: "Sprite Lemon Zero 2L", variants: [], units: ["2L"] }
                ],
                "Pães e Biscoitos": [
                    { name: "Pão Francês", variants: [], units: ["kg"] },
                    { name: "Pão de Forma", variants: [], units: ["unid"] },
                    { name: "Bisnaguinha", variants: [], units: ["pct"] },
                    { name: "Bolacha Waffer", variants: [], units: ["pct"] },
                    { name: "Bolacha recheada", variants: [], units: ["pct"] },
                    { name: "Bolacha Maisena", variants: [], units: ["pct"] },
                    { name: "Pipoca Doce", variants: [], units: ["pct"] },
                    { name: "Milho de Pipoca", variants: [], units: ["pct"] }
                ],
                "Frutas": [
                    { name: "Banana", variants: [], units: ["kg"] },
                    { name: "Maçã", variants: [], units: ["kg"] },
                    { name: "Pera", variants: [], units: ["kg"] },
                    { name: "Laranja", variants: [], units: ["kg"] },
                    { name: "Morango", variants: [], units: ["500g"] },
                    { name: "Mamão", variants: [], units: ["unid"] },
                    { name: "Limão", variants: [], units: ["kg"] },
                    { name: "Ciciliano", variants: [], units: ["kg"] }
                ],
                "Verduras e Legumes": [
                    { name: "Tomate", variants: [], units: ["kg"] },
                    { name: "Alface", variants: [], units: ["unid"] },
                    { name: "Pepino", variants: [], units: ["kg"] },
                    { name: "Brócolis", variants: [], units: ["unid"] },
                    { name: "Cebola", variants: [], units: ["kg"] }
                ]
            },
            sacolao: {
                "Frutas": [
                    { name: "Banana", variants: [], units: ["kg"] },
                    { name: "Maçã", variants: [], units: ["kg"] },
                    { name: "Pera", variants: [], units: ["kg"] },
                    { name: "Laranja", variants: [], units: ["kg"] },
                    { name: "Manga", variants: [], units: ["kg"] },
                    { name: "Mamão", variants: [], units: ["unid"] },
                    { name: "Limão", variants: [], units: ["kg"] },
                    { name: "Ceciliano", variants: [], units: ["kg"] },
                    { name: "Morango", variants: [], units: ["500g"] }
                ],
                "Verduras e Legumes": [
                    { name: "Tomate", variants: [], units: ["kg"] },
                    { name: "Alface", variants: [], units: ["unid"] },
                    { name: "Cebola", variants: [], units: ["kg"] },
                    { name: "Batata", variants: [], units: ["kg"] },
                    { name: "Cenoura", variants: [], units: ["kg"] },
                    { name: "Pepino", variants: [], units: ["kg"] },
                    { name: "Brócolis", variants: [], units: ["unid"] },
                    { name: "Repolho", variants: [], units: ["unid"] },
                    { name: "Couve", variants: [], units: ["maço"] },
                    { name: "Couve Flor", variants: [], units: ["unid"] }
                ]
            }
        };

        // SISTEMA DE MÚLTIPLOS MESES
        let currentMonth = '';
        let monthlyData = {};

        // Inicialização
        function init() {
            initializeMonthSystem();
            loadSavedData();
            setupEventListeners();
            updateAllLists();
            updateBudgetCalculations();
            updateStoreTotals();
            
            // Auto-salvar a cada 30 segundos
            setInterval(autoSaveData, 30000);
            
            // Salvar quando a página for fechada
            window.addEventListener('beforeunload', autoSaveData);
        }

        // NOVO: Sistema de múltiplos meses
        function initializeMonthSystem() {
            const now = new Date();
            const currentYear = now.getFullYear();
            const currentMonthIndex = now.getMonth();
            
            // Criar opções para 12 meses (6 anteriores e 6 futuros)
            const monthSelect = document.getElementById('month-select');
            monthSelect.innerHTML = '';
            
            for (let i = -6; i <= 6; i++) {
                const date = new Date(currentYear, currentMonthIndex + i, 1);
                const year = date.getFullYear();
                const month = date.getMonth();
                const monthKey = `${year}-${String(month + 1).padStart(2, '0')}`;
                const monthName = date.toLocaleDateString('pt-BR', { 
                    month: 'long', 
                    year: 'numeric' 
                });
                
                const option = document.createElement('option');
                option.value = monthKey;
                option.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
                
                if (i === 0) {
                    option.selected = true;
                    currentMonth = monthKey;
                }
                
                monthSelect.appendChild(option);
            }
        }

        // NOVO: Trocar de mês
        function changeMonth(monthKey) {
            // Salvar dados do mês atual antes de trocar
            autoSaveData();
            
            // Trocar para o novo mês
            currentMonth = monthKey;
            loadSavedData();
            updateAllLists();
            updateBudgetCalculations();
            updateStoreTotals();
            
            showMessage(`📅 Alterado para ${formatMonthName(monthKey)}`);
        }

        function formatMonthName(monthKey) {
            const [year, month] = monthKey.split('-');
            const date = new Date(year, month - 1, 1);
            return date.toLocaleDateString('pt-BR', { 
                month: 'long', 
                year: 'numeric' 
            });
        }

        function setupEventListeners() {
            // Orçamento inicial
            document.getElementById('initial-budget').addEventListener('input', (e) => {
                if (!monthlyData[currentMonth]) {
                    monthlyData[currentMonth] = { budget: 0, products: {} };
                }
                monthlyData[currentMonth].budget = parseFloat(e.target.value) || 0;
                updateBudgetCalculations();
                updateStoreTotals();
                autoSaveData();
            });

            // Busca em cada loja
            ['nagumo', 'assai', 'sacolao'].forEach(store => {
                const searchInput = document.getElementById(`${store}-search`);
                if (searchInput) {
                    searchInput.addEventListener('input', (e) => {
                        filterProducts(store, e.target.value);
                    });
                }
            });
        }

        function updateAllLists() {
            ['nagumo', 'assai', 'sacolao'].forEach(store => {
                updateProductList(store);
            });
        }

        function updateProductList(store) {
            const listElement = document.getElementById(`${store}-list`);
            if (!listElement) return;

            listElement.innerHTML = '';
            
            Object.entries(storeProducts[store]).forEach(([groupName, products]) => {
                // Criar cabeçalho do grupo
                const groupHeader = document.createElement('div');
                groupHeader.className = 'group-header';
                groupHeader.textContent = groupName;
                listElement.appendChild(groupHeader);
                
                // Criar itens do grupo
                products.forEach(product => {
                    const productItem = createProductItem(product, store, groupName);
                    listElement.appendChild(productItem);
                });
            });
        }

        function createProductItem(product, store, group) {
            const item = document.createElement('div');
            item.className = 'product-item';
            
            const productKey = `${store}-${group}-${product.name}`;
            const currentMonthData = monthlyData[currentMonth];
            const productData = (currentMonthData && currentMonthData.products[productKey]) || { quantity: 0, price: 0 };
            const total = productData.quantity * productData.price;
            
            // Determinar status
            let statusClass = 'empty';
            let statusIcon = '○';
            
            if (total > 0) {
                statusClass = 'purchased';
                statusIcon = '✓';
                item.classList.add('purchased');
            }

            item.innerHTML = `
                <div class="status-icon ${statusClass}">${statusIcon}</div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                </div>
                <input type="number" class="quantity-input" value="${productData.quantity || ''}" 
                       placeholder="Qtd" step="1" min="0" max="999"
                       oninput="updateProduct('${productKey}', this.value, null)"
                       onchange="updateProduct('${productKey}', this.value, null)">
                <input type="number" class="price-input" value="${productData.price || ''}" 
                       placeholder="0.00" step="0.01" min="0" inputmode="decimal"
                       oninput="updateProduct('${productKey}', null, this.value)"
                       onchange="updateProduct('${productKey}', null, this.value)">
                <div class="total-display">R$ ${total.toFixed(2).replace('.', ',')}</div>
            `;

            return item;
        }

        function updateProduct(productKey, quantity, price) {
            if (!monthlyData[currentMonth]) {
                monthlyData[currentMonth] = { budget: 0, products: {} };
            }
            
            if (!monthlyData[currentMonth].products[productKey]) {
                monthlyData[currentMonth].products[productKey] = { quantity: 0, price: 0 };
            }
            
            if (quantity !== null) {
                monthlyData[currentMonth].products[productKey].quantity = parseFloat(quantity) || 0;
            }
            
            if (price !== null) {
                monthlyData[currentMonth].products[productKey].price = parseFloat(price) || 0;
            }
            
            // Atualizar visualização imediatamente
            updateProductDisplay(productKey);
            updateBudgetCalculations();
            updateStoreTotals();
            autoSaveData();
        }

        function updateProductDisplay(productKey) {
            const [store, group, productName] = productKey.split('-');
            const currentMonthData = monthlyData[currentMonth];
            const productData = (currentMonthData && currentMonthData.products[productKey]) || { quantity: 0, price: 0 };
            const total = (productData.quantity || 0) * (productData.price || 0);
            
            // Encontrar o elemento do produto na lista atual
            const productItems = document.querySelectorAll('.product-item');
            productItems.forEach(item => {
                const nameElement = item.querySelector('.product-name');
                if (nameElement && nameElement.textContent === productName) {
                    const quantityInput = item.querySelector('.quantity-input');
                    const priceInput = item.querySelector('.price-input');
                    const totalDisplay = item.querySelector('.total-display');
                    const statusIcon = item.querySelector('.status-icon');
                    
                    if (quantityInput && priceInput && totalDisplay && statusIcon) {
                        // Atualizar totais
                        totalDisplay.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
                        
                        // Atualizar status
                        if (total > 0) {
                            statusIcon.className = 'status-icon purchased';
                            statusIcon.textContent = '✓';
                            item.classList.add('purchased');
                        } else {
                            statusIcon.className = 'status-icon empty';
                            statusIcon.textContent = '○';
                            item.classList.remove('purchased');
                        }
                    }
                }
            });
        }

        function updateBudgetCalculations() {
            const currentMonthData = monthlyData[currentMonth];
            if (!currentMonthData) return;
            
            let totalSpent = 0;
            
            // Calcular total gasto
            Object.values(currentMonthData.products || {}).forEach(product => {
                totalSpent += (product.quantity || 0) * (product.price || 0);
            });
            
            const budget = currentMonthData.budget || 0;
            const remaining = budget - totalSpent;
            
            // Atualizar displays
            document.getElementById('initial-budget').value = budget;
            document.getElementById('spent-value').textContent = `R$ ${totalSpent.toFixed(2).replace('.', ',')}`;
            document.getElementById('remaining-value').textContent = `R$ ${remaining.toFixed(2).replace('.', ',')}`;
            
            // Atualizar cor do saldo
            const remainingElement = document.getElementById('remaining-value');
            if (remaining < 0) {
                remainingElement.style.color = '#ff6b6b';
            } else if (remaining < budget * 0.1) {
                remainingElement.style.color = '#ffa500';
            } else {
                remainingElement.style.color = '#51cf66';
            }
        }

        // Atualizar totais por loja
        function updateStoreTotals() {
            const currentMonthData = monthlyData[currentMonth];
            if (!currentMonthData) return;
            
            const storeTotals = {
                nagumo: 0,
                assai: 0,
                sacolao: 0
            };
            
            // Calcular totais por loja
            Object.entries(currentMonthData.products || {}).forEach(([productKey, productData]) => {
                const [store] = productKey.split('-');
                const total = (productData.quantity || 0) * (productData.price || 0);
                
                if (storeTotals[store] !== undefined) {
                    storeTotals[store] += total;
                }
            });
            
            // Atualizar displays
            document.getElementById('nagumo-total').textContent = `R$ ${storeTotals.nagumo.toFixed(2).replace('.', ',')}`;
            document.getElementById('assai-total').textContent = `R$ ${storeTotals.assai.toFixed(2).replace('.', ',')}`;
            document.getElementById('sacolao-total').textContent = `R$ ${storeTotals.sacolao.toFixed(2).replace('.', ',')}`;
        }

        // Sistema de salvamento ATUALIZADO para múltiplos meses
        function saveAllData() {
            autoSaveData();
            showMessage(`✅ Dados de ${formatMonthName(currentMonth)} salvos com sucesso!`);
        }

        function autoSaveData() {
            try {
                // Salvar todos os meses
                const dataToSave = {
                    monthlyData: monthlyData,
                    currentMonth: currentMonth,
                    savedAt: new Date().toISOString()
                };
                
                localStorage.setItem('lista-compras-mensal', JSON.stringify(dataToSave));
                console.log(`💾 Dados de ${formatMonthName(currentMonth)} salvos`);
            } catch (error) {
                console.error('Erro ao salvar dados:', error);
            }
        }

        function loadSavedData() {
            try {
                const savedData = localStorage.getItem('lista-compras-mensal');
                if (savedData) {
                    const parsedData = JSON.parse(savedData);
                    monthlyData = parsedData.monthlyData || {};
                    currentMonth = parsedData.currentMonth || currentMonth;
                    
                    // Atualizar seletor de mês
                    document.getElementById('month-select').value = currentMonth;
                    
                    // Carregar dados do mês atual
                    const currentMonthData = monthlyData[currentMonth];
                    if (currentMonthData) {
                        document.getElementById('initial-budget').value = currentMonthData.budget || 0;
                    }
                    
                    console.log(`📂 Dados de ${formatMonthName(currentMonth)} carregados`);
                    showMessage(`✅ ${formatMonthName(currentMonth)} carregado!`);
                } else {
                    // Inicializar mês atual se não houver dados salvos
                    if (!monthlyData[currentMonth]) {
                        monthlyData[currentMonth] = { budget: 0, products: {} };
                    }
                }
            } catch (error) {
                console.error('Erro ao carregar dados:', error);
            }
        }

        function showMessage(message) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'inline-message';
            messageDiv.textContent = message;
            document.body.appendChild(messageDiv);
            
            setTimeout(() => {
                if (document.body.contains(messageDiv)) {
                    document.body.removeChild(messageDiv);
                }
            }, 3000);
        }

        function filterProducts(store, searchTerm) {
            const listElement = document.getElementById(`${store}-list`);
            const items = listElement.querySelectorAll('.product-item, .group-header');
            
            let currentGroup = null;
            let groupHasVisibleItems = false;
            
            items.forEach(item => {
                if (item.classList.contains('group-header')) {
                    // Processar grupo anterior
                    if (currentGroup && !groupHasVisibleItems) {
                        currentGroup.style.display = 'none';
                    }
                    
                    // Novo grupo
                    currentGroup = item;
                    groupHasVisibleItems = false;
                    item.style.display = 'block';
                } else {
                    const productName = item.querySelector('.product-name').textContent.toLowerCase();
                    const matches = productName.includes(searchTerm.toLowerCase());
                    
                    if (matches) {
                        item.style.display = 'grid';
                        groupHasVisibleItems = true;
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
            
            // Processar último grupo
            if (currentGroup && !groupHasVisibleItems) {
                currentGroup.style.display = 'none';
            }
        }

        // Sistema de navegação
        function showPage(pageId) {
            // Esconder todas as páginas
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Mostrar página selecionada
            const targetPage = document.getElementById(`${pageId}-page`);
            if (targetPage) {
                targetPage.classList.add('active');
            }
            
            // Atualizar botões de navegação
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Ativar botão correto
            const activeButton = Array.from(document.querySelectorAll('.tab-button')).find(btn => 
                btn.textContent.toLowerCase().includes(pageId.toLowerCase()) ||
                (pageId === 'budget' && btn.textContent.includes('Orçamento')) ||
                (pageId === 'summary' && btn.textContent.includes('Resumo'))
            );
            
            if (activeButton) {
                activeButton.classList.add('active');
            }
            
            // Atualizar resumo se necessário
            if (pageId === 'summary') {
                updateSummary();
            }
            
            // Atualizar totais da loja atual
            updateStoreTotals();
        }

        function updateSummary() {
            const summaryContent = document.getElementById('summary-content');
            const currentMonthData = monthlyData[currentMonth];
            
            if (!currentMonthData) {
                summaryContent.innerHTML = `
                    <div class="summary-row">
                        <span class="summary-label">ℹ️</span>
                        <span class="summary-value">Nenhum dado para ${formatMonthName(currentMonth)}</span>
                    </div>
                `;
                return;
            }
            
            const storeStats = {
                nagumo: { purchased: 0, total: 0 },
                assai: { purchased: 0, total: 0 },
                sacolao: { purchased: 0, total: 0 }
            };
            
            // Calcular totais por loja
            Object.entries(currentMonthData.products || {}).forEach(([productKey, productData]) => {
                const [store] = productKey.split('-');
                const total = (productData.quantity || 0) * (productData.price || 0);
                
                if (total > 0 && storeStats[store]) {
                    storeStats[store].purchased++;
                    storeStats[store].total += total;
                }
            });
            
            const totalSpent = storeStats.nagumo.total + storeStats.assai.total + storeStats.sacolao.total;
            const totalPurchased = storeStats.nagumo.purchased + storeStats.assai.purchased + storeStats.sacolao.purchased;
            const budget = currentMonthData.budget || 0;
            const remaining = budget - totalSpent;
            
            summaryContent.innerHTML = `
                <div class="summary-row">
                    <span class="summary-label">📅 Mês:</span>
                    <span class="summary-value">${formatMonthName(currentMonth)}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">💰 Orçamento Inicial:</span>
                    <span class="summary-value">R$ ${budget.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">🏪 Nagumo:</span>
                    <span class="summary-value">R$ ${storeStats.nagumo.total.toFixed(2).replace('.', ',')} (${storeStats.nagumo.purchased} itens)</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">🛒 Assaí:</span>
                    <span class="summary-value">R$ ${storeStats.assai.total.toFixed(2).replace('.', ',')} (${storeStats.assai.purchased} itens)</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">🥬 Sacolão:</span>
                    <span class="summary-value">R$ ${storeStats.sacolao.total.toFixed(2).replace('.', ',')} (${storeStats.sacolao.purchased} itens)</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">✓ Total de Itens:</span>
                    <span class="summary-value">${totalPurchased} itens</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">💰 Total Gasto:</span>
                    <span class="summary-value">R$ ${totalSpent.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">💵 Saldo Restante:</span>
                    <span class="summary-value" style="color: ${remaining >= 0 ? '#51cf66' : '#ff6b6b'}">
                        R$ ${remaining.toFixed(2).replace('.', ',')}
                    </span>
                </div>
            `;
        }

        // Inicializar quando a página carregar
        document.addEventListener('DOMContentLoaded', init);
    </script>
 </body>
</html>
