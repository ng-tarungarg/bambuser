import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { BambUserService } from './service/bambuser.service';
declare const BambuserPlayer

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bambuser';
  videos = [];
  lastVideo;
  @ViewChild('iFram') iFram;

  constructor(private bambUserService: BambUserService
  ) {

  }

  ngOnInit() {
    // this.bambUserService.getBroadCasts().subscribe((res: any) => {
    //   this.lastVideo = res.results.pop()
    //   this.videos = res.results

    //   this.createVideoByPlayer()
    // })
  }


  getPipelines() {
    this.bambUserService.getPipeLines().subscribe(res => {
    })
  }

  createVideoByPlayer() {
    let player = BambuserPlayer.create(document.getElementById('player'), this.lastVideo.resourceUri, {
      noFullscreen: false,
      startPosition: 0
    });

    player.addEventListener('pause', function () {
      console.log('player paused');
    });
    player.addEventListener('timeupdate', function () {
      // console.log('current time', player.currentTime);
    });
    player.controls = true;

    // player.addEventListener('click', function () {
    //   return player.paused ? player.play() : player.pause();
    // });

    // Seek a few minutes into the video.
    player.currentTime = 0;

    // Start the video immediately.
    player.play();

    // player.pause()

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        setTimeout(function () { player.pause(); }, 0);
      }
      // if (document.visibilityState) {
      //   player.play()
      // }
    }, false);
  }

  startBroadcasting() {
    let broadcaster = this.iFram.nativeElement.contentWindow;
    if (!broadcaster) return;
    // Post the start action via postMessage
    broadcaster.postMessage({ action: 'start' }, '*');
  }

  cleanUrl(url) {
    return encodeURIComponent(url)
  }


  getBroadCasts() {
    // this.bambUserService.getSandBoxBroadCasts().subscribe((res: any) => {
    this.bambUserService.getBroadCasts().subscribe((res: any) => {

      // this.lastVideo = res.results.pop()
      this.videos = res.results
      window.addEventListener('message', function (event) {
        if (event.origin !== 'https://dist.bambuser.net') {
          // Don't trust messages from other origins
          return;
        }
        var broadcasterEvent = event.data.broadcasterEvent;
        console.log(broadcasterEvent)
        if (broadcasterEvent && broadcasterEvent.name === 'registeredBroadcastId') {
          console.log('broadcast id: ', broadcasterEvent.data);
        }
      }, false);

      // this.createVideoByPlayer()
    })
  }

}
