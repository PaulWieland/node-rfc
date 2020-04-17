﻿// Copyright 2014 SAP AG.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http: //www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific
// language governing permissions and limitations under the License.

"use strict";

const setup = require("../setup");
const Pool = setup.rfcPool;
const abapSystem = setup.abapSystem;
const Promise = setup.Promise;

describe("Pool", () => {
    const pool = new Pool(abapSystem);

    test("Acquire 3, release 1", function () {
        expect.assertions(2);
        return Promise.all([
            pool.acquire(),
            pool.acquire(),
            pool.acquire().then((c) =>
                pool.release(c).then((id) => {
                    expect(id).toBeGreaterThan(0);
                })
            ),
        ]).finally(() => {
            expect(pool.status).toEqual(
                expect.objectContaining({
                    ready: 1,
                    active: 3,
                })
            );
        });
    });

    afterAll(function () {
        return pool.releaseAll();
    });
});