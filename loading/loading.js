// JQuery based method
// attach CSS and JS file before use


// parameter = selector you want to show loading animation
// it can be Tag, Class and also Id, but be careful
// you have to write apparently what you select
// ex) <section></section> Tag --> selector = 'section'
// ex) <div class = 'inner'></div> --> slector = '.inner'
// ex) <div id = 'home'></div> --> selector = '#home'

function addLoading(selector) {
    let loadingTempelate = `<div class='loading'></div>`
    $(selector).prepend(loadingTempelate);
    for (let i=1; i<16; i++) {
        let templateParts = `<span style='--i:${i};'></span>`
        $('.loading').append(templateParts)
    }
}

// Remove Loading Tags
function removeLoading(selector) {
    $(selector).childern('.loading').remove();
}

// 탬플릿 만들어서 함수로 html 동적 삽입
// addLoading('section')

// Custom Tag
// in here, i put classname 'loading' to customtag, but
// it doesn't have to attach classname
// 그냥 css 바꾸기 귀찮아서 클래스네임 달아놓은것뿐임!!!!!!
class Loading extends HTMLElement {
    connectedCallback() {
        for (let i=0; i<16; i++) {
            let loadingPart = document.createElement('span')
            loadingPart.style = `--i:${i}`
            this.appendChild(loadingPart);
        }
    }
}

customElements.define('custom-loading', Loading);

// 커스텀태그로 그냥 달아버리기~