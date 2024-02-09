import{_ as e,o as a,c as s,b as n}from"./app-fEtquxML.js";const t={},l=n(`<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h1><h2 id="backend-environment" tabindex="-1"><a class="header-anchor" href="#backend-environment"><span>Backend environment</span></a></h2><div class="custom-container warning"><p class="custom-container-title">Prerequisite</p><ul><li>Your machine environment is compatible for developing full stack Laravel.</li><li>You have cloned the repository from <code>git@github.com:ebteq/salon-v3.git</code>.</li></ul></div><h3 id="setting-up-env" tabindex="-1"><a class="header-anchor" href="#setting-up-env"><span>Setting up .env</span></a></h3><ol><li>In your project directory, copy the .env.example to .env</li></ol><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">cp</span><span style="color:#CE9178;"> .env.example .env</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Edit .env for your local database setting</li></ol><div class="language-txt" data-ext="txt" data-title=".env"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span>...</span></span>
<span class="line"><span>DB_DATABASE=your-local-db-name</span></span>
<span class="line"><span>DB_USERNAME=your-local-db-username</span></span>
<span class="line"><span>DB_PASSWORD=your-local-db-password</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span></code></pre></div><ol start="3"><li>Run migration</li></ol><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">php</span><span style="color:#CE9178;"> artisan migrate</span></span>
<span class="line"></span></code></pre></div><h3 id="essential-database-data" tabindex="-1"><a class="header-anchor" href="#essential-database-data"><span>Essential database data</span></a></h3><ol><li>Add your email to seeder <code>database/seeders/RapidTestingSeeder.php@setupEbteqAccounts</code></li></ol><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">protected</span><span style="color:#569CD6;"> function</span><span style="color:#DCDCAA;"> setupEbteqAccounts</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#C586C0;">    foreach</span><span style="color:#D4D4D4;"> ([</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;khoo.jack@gmail.com&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;barnabasoung@gmail.com&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;aaz.abdulazizzulfikar@gmail.com&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;mputra.aryandi@gmail.com&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;ntk.0629@gmail.com&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;yourname@mail.com&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    ] as </span><span style="color:#9CDCFE;">$email</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#569CD6;">        $this</span><span style="color:#D4D4D4;">-&gt;</span><span style="color:#DCDCAA;">setupEbteqAccount</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">$email</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Explanation</p><p>This will add your email as an admin account to access to almost every permission for the ease of development and debugging in local and staging. ::: 2. Run seeder to setup basic data to kick start your development.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">php</span><span style="color:#CE9178;"> artisan db:seed RapidTestingSeeder</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run seeder to have richer data in place for development.</li></ol><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">php</span><span style="color:#CE9178;"> artisan db:seed RapidAdditionalDataSeeder</span></span>
<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This seeder is not essential, but and populate your local database with some data to mimic a more complete usage of the accounts</p></div></div><h2 id="front-end" tabindex="-1"><a class="header-anchor" href="#front-end"><span>Front end</span></a></h2><ol><li><code>npm install</code></li><li><code>npm run build</code> to generate static build of your front end files</li><li><code>npm run dev</code> to run a development server for your front end files</li></ol><h2 id="ready-to-go" tabindex="-1"><a class="header-anchor" href="#ready-to-go"><span>Ready to go</span></a></h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>You may start from: http://your-local.domain/ebteqsoftware/pos</li><li>Use the email you&#39;ve just added to login to the account <code>yourname@mail.com</code>.</li><li>The password is <code>password</code>.</li></ol></div>`,18),o=[l];function i(r,c){return a(),s("div",null,o)}const d=e(t,[["render",i],["__file","getting-started.html.vue"]]),u=JSON.parse('{"path":"/guide/getting-started.html","title":"Getting Started","lang":"en-US","frontmatter":{"description":"Getting Started Backend environment Prerequisite Your machine environment is compatible for developing full stack Laravel. You have cloned the repository from git@github.com:ebt...","head":[["meta",{"property":"og:url","content":"https://ebteq.github.io/salon-docs/guide/getting-started.html"}],["meta",{"property":"og:site_name","content":"Ebteq"}],["meta",{"property":"og:title","content":"Getting Started"}],["meta",{"property":"og:description","content":"Getting Started Backend environment Prerequisite Your machine environment is compatible for developing full stack Laravel. You have cloned the repository from git@github.com:ebt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-09T11:51:21.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-09T11:51:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Getting Started\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-09T11:51:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Backend environment","slug":"backend-environment","link":"#backend-environment","children":[{"level":3,"title":"Setting up .env","slug":"setting-up-env","link":"#setting-up-env","children":[]},{"level":3,"title":"Essential database data","slug":"essential-database-data","link":"#essential-database-data","children":[]}]},{"level":2,"title":"Front end","slug":"front-end","link":"#front-end","children":[]},{"level":2,"title":"Ready to go","slug":"ready-to-go","link":"#ready-to-go","children":[]}],"git":{"updatedTime":1707479481000,"contributors":[{"name":"Khoo Yong Jun","email":"programmer.sk95@gmail.com","commits":2}]},"autoDesc":true,"filePathRelative":"guide/getting-started.md"}');export{d as comp,u as data};
