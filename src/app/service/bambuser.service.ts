import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

// GET /broadcasts and GET /images
// POST /virtualResourceUri
// GET /pipelines
// GET /applications/:applicationId and GET /applications
// PATCH /broadcasts/:id
// POST /broadcasterEmbedUrl
// PUT /broadcasts/:id/stop
// POST /broadcasts
// POST /pipelines and POST /pipelines/:pipelineId/outputs
// PATCH /pipelines/:pipelineId
// POST /broadcasts/:broadcastId/tags
// POST /applications
// DELETE /broadcasts/:id and DELETE /images/:id

@Injectable()
export class BambUserService {

  constructor(private http: HttpClient) { }

  getBroadCasts() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/vnd.bambuser.v1+json",
        "Authorization": "Bearer NgjeMft3gudxzzZXqFbRQ4"
        // sandbox 41TtggRZmihJGUgeeviLAZ
      })
    };

    return this.http.get('https://api.bambuser.com/broadcasts', httpOptions);
  }

  getSandBoxBroadCasts() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/vnd.bambuser.v1+json",
        "Authorization": "Bearer 41TtggRZmihJGUgeeviLAZ"
        // sandbox 41TtggRZmihJGUgeeviLAZ
      })
    };

    return this.http.get('https://api.bambuser.com/broadcasts', httpOptions);
  }

  getPipeLines() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/vnd.bambuser.v1+json",
        "Authorization": "Bearer 41TtggRZmihJGUgeeviLAZ"
        // prod NgjeMft3gudxzzZXqFbRQ4
      })
    };

    return this.http.get('https://api.bambuser.com/pipelines', httpOptions);

  }
}
