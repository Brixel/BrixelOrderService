# BrixelOrderService
The lazy Brixelian's tool to request drinks

## Goal
To achieve more by doing even less, the Brixel Order Service is a lightweight service that allows the members of Brixel to place drink requests in a system. The ordered drinks are then being shown by an PoS-system close to the fridge containing all the cool goodness.

## Setup
The system contains of two parts:
* UI: using Angular2+ (actually 7, if I'm not mistaken)
* API: running in .NET Core 2.X

You'll see two directories at root level: WebApp and API, both pretty explanatory.
There should be no issues with building it, since they all use public available packages (all hosted on npm and nuget.org

We're building the .NET Core API against a ARM for Pi target, and it works like a charm.
