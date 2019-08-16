define(["Vue"], function(Vue){
    let Article = Vue.component("Article", {
        template: `
            <div class="uk-container uk-margin-top">

                <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                    <article class="uk-article">

                        <h3 class="uk-card-title">New bpJS framework</h3>

                        <p class="uk-article-meta">Written by <a href="#">Fahriansyah</a> on 17 Agustus 2019. Posted in <a href="#">Here..</a></p>

                        <p>Sebenernya ini bukan framework sihh,,, cuma boilerplate frontend biasa untuk SPA yang combine Vue + requirejs bisa di develop tanpa NPM, ga perlu ribet2 compile2 segala.. jadi kalau ada perubahan dari local ke server tinggal Git push, pull aja ga perlu rebuild. bpJS Ini cocok dipake untuk backend yang tidak menggunakan NodeJS.</p>

                        <div class="uk-grid-small uk-child-width-auto" uk-grid>
                            <div>
                                <a class="uk-button uk-button-text" href="#">Read more</a>
                            </div>
                            <div>
                                <a class="uk-button uk-button-text" href="#">5 Comments</a>
                            </div>
                        </div>

                    </article>
                </div>
            </div>
        `
    })

    return Article
})
