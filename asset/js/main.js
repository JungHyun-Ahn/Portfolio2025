import { designData } from "./data.js";

$(window).on('load', function(){
    // design
    setDesignItems(designData);
    $(document).on('click', '[data-design]', function() {
        let id = $(this).data('design');
        let tit = designData.find(item => item.id == id).name;
        let sort = designData.find(item => item.id == id).type;
        let detail = designData.find(item => item.id == id).detail;
        let link = designData.find(item => item.id == id).link;
        let images = designData.find(item => item.id == id).images;
        let txt = '';

        $("#designModal .modal-desc-tit").html(tit);
        $("#designModal .modal-desc-sort").html(sort);
        $("#designModal .modal-desc-detail").html(detail);
        if(link.length) {
            $("#designModal .modal-desc-link").html(`<a href="${link}" target="_blank">${link}</a>`);
        } else {
            $("#designModal .modal-desc-link").html('-');
        }
        for(let i = 0; i < images.length; i++) {
            txt += `
                <img src="${images[i]}" alt="">
            `
        }
        $("#designModal .modal-img").html(txt);
    })
    $(document).on('click', '#sect-design .menu-list li', function() {
        $(this).closest('.menu-list').find('li').removeClass('active');
        $(this).addClass('active');

        const filter = $(this).data('filter');
        if (filter == null) return;

        $.each($('#sect-design .works-items li'), function(index, item) {
            if(filter == "*" || filter == $(item).data('type')) {
                $(item).removeClass('hide');
            } else {
                $(item).addClass('hide');
            }
        });
    });
});

function setDesignItems(arr) {
    for(let i = 0; i < designData.length; i++) {
        $("#sect-design .works-items").prepend(
            `<li class="item" data-type=${arr[i].dataType} data-aos="fade-up">
                <img src=${arr[i].thumImg} alt="">
                <div class="item-detail text-center text-white">
                    <p class="h6">${arr[i].name}</p>
                    <p class="h5">${arr[i].type}</p>
                    <button type="button" class="btn btn-outline text-xs" data-design=${arr[i].id} data-toggle="modal" data-target="#designModal">MORE VIEW</button>
                </div>
            </li>`
        );
    }
}