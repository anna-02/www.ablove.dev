---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: 
layout: default
---
<div class="row justify-content-md-center">
    <div class="text-center col-12 col-md-7 mb-lg-1 pt-4">
      <h1>Anna's Personal Website</h1>
    </div>
  </div>
<!-- <div style="background-color: rgba(255,255,255,0.75)"> -->
<div class="row justify-content-md-center pb-2" >
<div class="text-justify col-12 order-1 order-md-1">
        <div class="col-12 mb-lg-1 pt-4 text-center col align-self-center" >
        <img alt="vpnalyzer overview" id="right" style=" width: auto; height: auto; max-width:40%; float: right; padding-left: 1cm;" src="{{ site.url }}/assets/img/anna_pic.jpeg" />
        </div>
      <p class="large">Hello, my name is Anna Ablove, and I am a graduate student at the University of Michigan studying Computer Science. For the past year, I have been a part of Professor Roya Ensafi's lab, researching the deployment and circumvention of internet censorship. Additionally, for the past two summers, I have worked as an instructor at Insprit AI, where I taught middle school and high school students to program in Python, apply algorithms to real-world datasets, discuss AI ethics and applications, and build interactive web apps to deploy their machine learning models. </p>
      <!-- <p class="large">During undergrad, I did a project through a Google funded computer science research program studying story convergence in news reporting. I used web scrapers to build a dataset of articles, and then applied Natural Language Processing concepts, like Named Entity Recognition, to summarize and classify them. Also, for a final project in a Natural Language Processing course, I implemented a recently proposed neural network architecture, Hierarchal Attention Networks to build a sarcasm detection classifier. As part of my coursework this year, I am looking forward to deepening my understanding of the underlying mathematics and theory behind topics I explored during undergrad, such as machine learning and cryptography, as well as my functional knowledge of network security and associated method and technologies. </p> -->
      </div>  
</div>

<!-- <div class="container pt-5 pb-2"> -->
<div class="row py-1 justify-content-between">
<div class="row text-center">
	<h2>Current and Recent Projects</h2>
</div>
	<div class="row flex">
      <div class="col-md-6">
        <div class="row" id="grid">
            <div class="col-md-6 mb-3"><img src="{{ site.url }}/assets/img/logo-icon.png" class="img-thumbnail img-responsive" style="width: 200px; height: 200 px; object-fit: fill; aspect-ratio: 1;"></div> 
            <div class="col-md-6"><img src="{{ site.url }}/assets/img/big_tracegraph.png" class="img-thumbnail img-responsive" style="width: 200px; height: 200 px; object-fit: fill; aspect-ratio: 1;"></div>  
            <div class="col-md-6"><img src="{{ site.url }}/assets/img/hands.png" class="img-thumbnail img-responsive" style="width: 200px; height: 200 px; object-fit: fill; aspect-ratio: 1;"></div>  
            <div class="col-md-6"><img src="{{ site.url }}/assets/img/sarcasm.png" class="img-thumbnail img-responsive" style="width: 200px; height: 200 px; object-fit: fill; aspect-ratio: 1;"></div> 
        </div>
          <!-- <div class="row" id="grid"> -->
        <!-- </div> -->
      </div>
      <div class="col-md-6 flex" id="descriptions">
        <p><i>Click icons to reveal project information</i></p>
      	<div class="panel panel-default flex-col">
         <div class="panel-heading mb-3"><a href="https://vpnalyzer.org/" style="color: black; font-size: 1.25em;"><b>VPNalyzer</b></a></div>
         <div class="panel-body flex-grow">VPNalyzer is an interdisciplinary research project from the University of Michigan that aims to analyze the VPN ecosystem. VPNalyzer consists of three parallel efforts: large-scale quantitative and qualitative user studies, a cross-platform desktop tool for users to test the security and privacy features of their VPN connection, and qualitative studies surveying VPN providers. Currently, we are focusing our attention on the international community using VPNs to bypass censorship, and we are in the process of adapting and extending the questions in our VPNalyzer survey to be more tailored to VPN use for circumvention.</div>
        </div>
        <div class="panel panel-default">
         <div class="panel-heading mb-3"><a href="https://dl.acm.org/doi/abs/10.1145/3517745.3561461" style="color: black; font-size: 1.25em;"><b>TSPU: Russia's Decentralized Censorship System</b></a></div>
         <div class="panel-body">Russia's Sovereign RuNet was designed to build a Russian national firewall. Previous anecdotes and isolated events in the past two years reflected centrally coordinated censorship behaviors across multiple ISPs, suggesting the deployment of "special equipment" in networks, colloquially known as "TSPU". Despite the TSPU comprising a critical part of the technical stack of RuNet, very little is known about its design, its capabilities, or the extent of its deployment. In this paper, presented at IMC 2022, we developed novel techniques and run in-country and remote measurements to discover the how, what, and where of TSPU's interference with users' Internet traffic. I developed traceroute visualizations that illustrated where the deployment of TSPU is located on network paths.</div>
        </div>
        <div class="panel panel-default">
         <div class="panel-heading mb-3"> <a href="https://hiyori-02.itch.io/operation-homunculi" style="color: black; font-size: 1.25em;"><b>Operation Homunculi</b>:</a> </div>
         <div class="panel-body">"Operation Homunculi is a stealth/horror game where you must navigate through an eerie prison where all is not as it seems. Let the shadows be your guide and use your powers to avoid, distract, and control the freaks of nature you find lurking in the cells and hallways — but make sure you’re not caught off guard, you can’t fight back!" <i>This game was completed as part of my senior design captone course</i>.</div>
        </div>
        <div class="panel panel-default">
         <div class="panel-heading mb-3"><a href="https://github.com/anna-02/487final" style="color: black; font-size: 1.25em;"><b>Sarcasm Detection</b></a></div>
         <div class="panel-body">This project explores Sarcasm Detection on Reddit, and focuses on methods analyzing both the context and reply, where the reply is the potentially sarcastic comment and the context is a parent comment or equivalent. We aimed to improve accuracy of sarcasm detection on Reddit by further exploring the role of attention mechanisms, which have been explored in previous literature. We investigated the performances of Hierarchical Attention Networks (HANs) with varying training sizes. We show that a HAN provides surprisingly good results for this task, given a large enough training size. </div>
        </div>
      </div>
	</div>
  <!-- </div> -->
<!-- </div> -->
