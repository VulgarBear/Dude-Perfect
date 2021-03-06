// Copyright 2019 Arindam Hazra aka Xynox <https://arindamz.github.io/>
// 
// Licensed under the Apache License, Version 2.0(the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const { Listener } = require("discord-akairo")

class Ready extends Listener {
    constructor() {
        super('ready', {
            event: 'ready',
            emitter: 'client'
        });
    }

    exec() {

        const activities = [
            `${this.client.guilds.cache.size} guilds!`,
            `Anish, Hound, Kartik, Piyush & Xynox!`,
            `${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`
        ];

        let i = 0;
        setInterval(() => this.client.user.setActivity(`dp!help | ${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 15000);

        console.log(`${this.client.user.tag} is online!`);

    }
}

module.exports = Ready;
