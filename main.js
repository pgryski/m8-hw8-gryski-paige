// Products
var productButton = document.getElementById('products');
var showProductSubMenu = document.getElementById('products-sub');

function openProductsPanel() {
    showProductSubMenu.classList.add('show')
}

productButton.addEventListener('click', openProductsPanel);

// Services
var servicesButton = document.getElementById('services');
var showServicesSubMenu = document.getElementById('services-sub');

function openServicesPanel() {
    showServicesSubMenu.classList.add('show')
}

servicesButton.addEventListener('click', openServicesPanel);

// Company
var companyButton = document.getElementById('company');
var showCompanySubMenu = document.getElementById('company-sub');

function openCompanyPanel() {
    showCompanySubMenu.classList.add('show')
}

companyButton.addEventListener('click', openCompanyPanel);