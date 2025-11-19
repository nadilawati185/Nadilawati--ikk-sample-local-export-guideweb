<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IKK Sample Management System</title>
  <script src="/_sdk/element_sdk.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow-x: hidden;
      background: #0a0e27;
      color: #ffffff;
      box-sizing: border-box;
    }

    html, body {
      height: 100%;
    }

    /* Parallax Container */
    .parallax-container {
      position: relative;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    /* Animated Background */
    .animated-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      z-index: -1;
    }

    .particles {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
    }

    .particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      animation: float 12s infinite ease-in-out;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% {
        transform: translateY(-100%) translateX(40px);
        opacity: 0;
      }
    }

    /* Page Sections */
    .page-section {
      min-height: 100%;
      position: relative;
      padding: 80px 24px;
      display: none;
    }

    .page-section.active {
      display: block;
      animation: fadeInPage 0.6s ease-out;
    }

    @keyframes fadeInPage {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Home Page */
    .home-hero {
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: relative;
    }

    .home-hero h1 {
      font-size: 64px;
      font-weight: 800;
      margin-bottom: 24px;
      color: #ffffff;
      text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
      animation: slideDown 0.8s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .home-hero p {
      font-size: 24px;
      color: #ffffff;
      margin-bottom: 64px;
      opacity: 0.95;
      animation: slideDown 0.8s ease-out 0.2s backwards;
    }

    .choice-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
      max-width: 1000px;
      width: 100%;
      animation: slideUp 0.8s ease-out 0.4s backwards;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .choice-card {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 28px;
      padding: 56px 40px;
      backdrop-filter: blur(12px);
      border: 2px solid rgba(255, 255, 255, 0.15);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .choice-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.5) 100%);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    .choice-card:hover {
      transform: translateY(-16px) scale(1.03);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
      border-color: rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.12);
    }

    .choice-card:hover::before {
      transform: scaleX(1);
    }

    .choice-icon {
      font-size: 72px;
      margin-bottom: 28px;
      display: block;
      animation: bounce 2s ease-in-out infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }

    .choice-card:hover .choice-icon {
      animation: spin 0.6s ease-in-out;
    }

    @keyframes spin {
      from { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(180deg) scale(1.2); }
      to { transform: rotate(360deg) scale(1); }
    }

    .choice-card h2 {
      font-size: 32px;
      margin-bottom: 16px;
      color: #ffffff;
    }

    .choice-card p {
      font-size: 18px;
      color: #ffffff;
      opacity: 0.9;
      margin-bottom: 32px;
      line-height: 1.6;
    }

    .choice-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 40px;
      background: rgba(255, 255, 255, 0.95);
      color: #667eea;
      border: none;
      border-radius: 14px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .choice-btn:hover {
      background: #ffffff;
      transform: translateX(5px);
      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
    }

    /* Back Button */
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 40px;
    }

    .back-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(-5px);
    }

    /* Page Header */
    .page-header {
      text-align: center;
      margin-bottom: 60px;
      animation: fadeInDown 0.6s ease-out;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .page-icon {
      font-size: 80px;
      margin-bottom: 24px;
    }

    .page-header h1 {
      font-size: 48px;
      margin-bottom: 16px;
      color: #ffffff;
      text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }

    .page-header p {
      font-size: 20px;
      color: #ffffff;
      opacity: 0.9;
    }

    /* Container */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* Flow Steps */
    .flow-steps {
      display: flex;
      flex-direction: column;
      gap: 32px;
      margin-bottom: 60px;
    }

    .flow-step {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 32px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: all 0.4s ease;
      animation: slideInLeft 0.6s ease-out backwards;
    }

    .flow-step:nth-child(1) { animation-delay: 0.1s; }
    .flow-step:nth-child(2) { animation-delay: 0.2s; }
    .flow-step:nth-child(3) { animation-delay: 0.3s; }
    .flow-step:nth-child(4) { animation-delay: 0.4s; }
    .flow-step:nth-child(5) { animation-delay: 0.5s; }
    .flow-step:nth-child(6) { animation-delay: 0.6s; }
    .flow-step:nth-child(7) { animation-delay: 0.7s; }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-40px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .flow-step:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateX(12px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    }

    .step-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }

    .step-number {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
      color: #667eea;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 24px;
      flex-shrink: 0;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .step-title {
      font-size: 26px;
      color: #ffffff;
      font-weight: 700;
    }

    .step-content {
      margin-left: 76px;
    }

    .step-description {
      font-size: 16px;
      color: #ffffff;
      opacity: 0.9;
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .step-list {
      list-style: none;
      margin-top: 16px;
    }

    .step-list li {
      padding: 10px 0;
      color: #ffffff;
      opacity: 0.85;
      padding-left: 28px;
      position: relative;
      line-height: 1.5;
    }

    .step-list li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #ffffff;
      font-weight: bold;
      font-size: 18px;
    }

    /* Info Box */
    .info-box {
      background: rgba(255, 255, 255, 0.15);
      padding: 24px;
      border-radius: 16px;
      margin-top: 20px;
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .info-box h4 {
      color: #ffffff;
      margin-bottom: 12px;
      font-size: 18px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .info-box a {
      color: #ffffff;
      text-decoration: underline;
      transition: all 0.3s ease;
      font-weight: 600;
    }

    .info-box a:hover {
      color: rgba(255, 255, 255, 0.8);
    }

    .info-box p {
      color: #ffffff;
      opacity: 0.9;
      line-height: 1.6;
    }

    /* Calculator Section */
    .calculator-section {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 48px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      margin-top: 40px;
      animation: fadeIn 0.8s ease-out 0.8s backwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .calculator-section h2 {
      font-size: 36px;
      margin-bottom: 32px;
      color: #ffffff;
      text-align: center;
    }

    .calculator-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .calc-input-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .calc-input-group label {
      font-size: 15px;
      color: #ffffff;
      font-weight: 600;
      opacity: 0.95;
    }

    .calc-input-group input,
    .calc-input-group select {
      padding: 14px 18px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      color: #ffffff;
      font-size: 16px;
      transition: all 0.3s ease;
    }

    .calc-input-group input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    .calc-input-group input:focus,
    .calc-input-group select:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.15);
    }

    .calc-input-group select option {
      background: #1a1f3a;
      color: #ffffff;
    }

    .calc-results {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin-top: 40px;
    }

    .calc-result-item {
      background: rgba(255, 255, 255, 0.15);
      padding: 28px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.25);
      text-align: center;
      transition: all 0.3s ease;
    }

    .calc-result-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .calc-result-item h4 {
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 12px;
      opacity: 0.9;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .calc-result-item .value {
      font-size: 32px;
      font-weight: 800;
      color: #ffffff;
    }

    /* Resource Links */
    .resource-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .resource-link {
      background: rgba(255, 255, 255, 0.08);
      padding: 24px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: all 0.3s ease;
      text-decoration: none;
      display: block;
    }

    .resource-link:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .resource-link h3 {
      font-size: 20px;
      color: #ffffff;
      margin-bottom: 8px;
    }

    .resource-link p {
      color: #ffffff;
      opacity: 0.85;
      font-size: 14px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .home-hero h1 {
        font-size: 40px;
      }

      .home-hero p {
        font-size: 18px;
      }

      .choice-cards {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .choice-card {
        padding: 40px 28px;
      }

      .page-header h1 {
        font-size: 36px;
      }

      .step-content {
        margin-left: 0;
        margin-top: 16px;
      }

      .step-header {
        flex-direction: column;
        text-align: center;
      }

      .calculator-section {
        padding: 28px;
      }
    }
  </style>
  <style>@view-transition { navigation: auto; }</style>
  <script src="/_sdk/data_sdk.js" type="text/javascript"></script>
  <script src="https://cdn.tailwindcss.com" type="text/javascript"></script>
 </head>
 <body>
  <div class="animated-bg"></div>
  <div class="particles" id="particles"></div>
  <div class="parallax-container" id="mainContainer"><!-- HOME PAGE -->
   <section class="page-section active" id="homePage">
    <div class="home-hero">
     <h1 id="mainTitle">IKK Sample Management System</h1>
     <p id="subtitle">Choose your sample process workflow</p>
     <div class="choice-cards">
      <div class="choice-card" onclick="navigateToPage('localPage')"><span class="choice-icon">🏠</span>
       <h2 id="localCardTitle">Local Sample</h2>
       <p id="localCardDesc">Complete workflow for processing local sample requests with SRF form creation and team coordination</p><button class="choice-btn">Start Local Process →</button>
      </div>
      <div class="choice-card" onclick="navigateToPage('exportPage')"><span class="choice-icon">🌍</span>
       <h2 id="exportCardTitle">Export Sample</h2>
       <p id="exportCardDesc">Comprehensive e-Sample system guide for international sample shipments and documentation</p><button class="choice-btn">Start Export Process →</button>
      </div>
     </div>
    </div>
   </section><!-- LOCAL SAMPLE PAGE -->
   <section class="page-section" id="localPage">
    <div class="container"><button class="back-btn" onclick="navigateToPage('homePage')">← Back to Home</button>
     <div class="page-header">
      <div class="page-icon">
       🏠
      </div>
      <h1>Local Sample Process Flow</h1>
      <p>Step-by-step workflow for local sample requests</p>
     </div><!-- Quick Access Link -->
     <div class="resource-links"><a href="https://gitssc-my.sharepoint.com/:x:/r/personal/nadilawati_k_nurjanah_app_co_id/_layouts/15/Doc2.aspx?action=edit&amp;sourcedoc=%7B758ade88-7002-4fcd-87fc-e2d60a519fc2%7D" target="_blank" rel="noopener noreferrer" class="resource-link"> <h3>📊 Dashboard Order Intake</h3><p>Access the sample IKK local &amp; export dashboard</p></a>
     </div>
     <div class="flow-steps">
      <div class="flow-step">
       <div class="step-header">
        <div class="step-number">
         1
        </div>
        <h3 class="step-title">Receive Email from Customer to IKK Customer Service</h3>
       </div>
       <div class="step-content">
        <p class="step-description">Customer service receives initial sample request email from customer with complete details</p>
        <ul class="step-list">
         <li><strong>Email Reception:</strong> Customer sends email request to IKK Customer Service</li>
         <li><strong>Sample Details:</strong> Review detailed information about required sample items</li>
         <li><strong>Product Specifications:</strong> Note the following details from customer email:</li>
         <li style="margin-left: 20px;">• Sample description and product type</li>
         <li style="margin-left: 20px;">• GSM (Gram per Square Meter) specification</li>
         <li style="margin-left: 20px;">• Grade/quality requirement</li>
         <li style="margin-left: 20px;">• Quantity needed (number of pieces, kg, rolls, sheets)</li>
         <li style="margin-left: 20px;">• Size/Format (A4 or custom dimensions)</li>
         <li style="margin-left: 20px;">• REMARKS (special requirements, testing purpose, deadlines)</li>
         <li><strong>Recipient Information:</strong> Extract recipient details from email:</li>
         <li style="margin-left: 20px;">�� ATTN - Name of person receiving sample</li>
         <li style="margin-left: 20px;">• Complete delivery address (street, city, postal code)</li>
         <li style="margin-left: 20px;">• Contact email and phone number</li>
         <li><strong>Verify Information:</strong> Confirm all required details are complete</li>
         <li><strong>Acknowledge Receipt:</strong> Send confirmation email to customer</li>
        </ul>
        <div class="info-box">
         <h4>📧 Customer Email Checklist:</h4>
         <p>✓ Sample description/product type<br>
           ✓ GSM specification<br>
           ✓ Grade/quality requirement<br>
           ✓ Quantity needed<br>
           ��� Size (A4 or custom)<br>
           ✓ REMARKS/special requirements<br>
           ✓ Recipient name (ATTN)<br>
           ✓ Complete delivery address<br>
           ��� Contact email &amp; phone number</p>
        </div>
       </div>
      </div>
      <div class="flow-step">
       <div class="step-header">
        <div class="step-number">
         2
        </div>
        <h3 class="step-title">Create SRF Form (Sample Request Form)</h3>
       </div>
       <div class="step-content">
        <p class="step-description">Fill out the complete SRF form with all required information from customer email</p>
        <ul class="step-list">
         <li><strong>SRF Date:</strong> Enter the date of sample request creation (DD/MM/YYYY)</li>
         <li><strong>Prepared By:</strong> Enter the name of person creating the request</li>
         <li><strong>Sample Description:</strong> Provide detailed description of the sample product</li>
         <li><strong>GSM (Gram per Square Meter):</strong> Specify the paper/material weight</li>
         <li><strong>Size/Format:</strong> Enter dimensions (e.g., A4, custom size in cm)</li>
         <li><strong>Remarks:</strong> Add any special requirements or specifications</li>
         <li><strong>Notes:</strong> Include additional information if needed (quality notes, handling instructions)</li>
        </ul>
        <div class="info-box">
         <h4>📋 Recipient Details Section:</h4>
         <ul class="step-list">
          <li><strong>ATTN (Attention):</strong> Name of the person receiving the sample</li>
          <li><strong>Recipient Address:</strong> Complete delivery address with postal code</li>
          <li><strong>Email Address:</strong> Contact email for delivery notifications</li>
          <li><strong>Phone Number:</strong> Contact number for delivery coordination</li>
         </ul>
        </div>
       </div>
      </div>
      <div class="flow-step">
       <div class="step-header">
        <div class="step-number">
         3
        </div>
        <h3 class="step-title">Review
