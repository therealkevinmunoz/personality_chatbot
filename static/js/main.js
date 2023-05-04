let mbtiOptions = document.querySelectorAll('#mbti-container div');

function getPersonality() {
    return
}

function bindEvents() {
    mbtiOptions.forEach(mbtiOption => {
        mbtiOption.addEventListener('click', function(){
            removembtiDisplay();
            showCategoriesDisplay();
        })
    })
}

function removembtiDisplay() {
    let mbtiDisplay = document.getElementById('mbti-section-container')
    mbtiDisplay.style.display = 'none';
}

function showCategoriesDisplay() {
    
    let categoriesDisplay = document.getElementById('categories-section-container')
    console.log(categoriesDisplay)
    categoriesDisplay.style.display = 'block';
}

function removeCategoriesDisplay() {
    let categoriesDisplay = document.getElementById('categories-section-container')
    categoriesDisplay.style.display = 'none';
}

bindEvents()