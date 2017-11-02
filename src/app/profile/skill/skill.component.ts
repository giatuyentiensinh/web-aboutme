import { Component, OnInit } from '@angular/core';
import { MasonryModule } from 'angular2-masonry';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  private images = [
    'assets/images/playframework.png',
    'assets/images/mongodb.png',
    'assets/images/elasticsearch.png',
    'assets/images/cassandra.png',
    'assets/images/spark.png',
    'assets/images/mysql.png',
    'assets/images/materialize.png',
    'assets/images/bootstrap.png',
    'assets/images/rabbitmq.png',
    'assets/images/angularjs.png',
    'assets/images/neo4j.png',
    'assets/images/titan.png',
    'assets/images/yeoman.png',
    'assets/images/bower.png',
    'assets/images/grunt.png',
    'assets/images/java.png',
    'assets/images/maven.png'
  ];

  constructor() {

  }

  ngOnInit() {
  }

  doStuff($event) {
    console.log('hello world');
  }
}
