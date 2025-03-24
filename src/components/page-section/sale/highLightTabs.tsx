"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const highLightTabs = () => {
  return (
    <div className="min-h-screen w-full bg-background gridAnim p-4">
      <div className="w-full mx-auto space-y-12">
        {/* Blue Border Box */}
        <div className=" rounded-2xl md:p-8">
          {/* Tabs Navigation */}
          <Tabs defaultValue="highlights" className="w-full">
            <TabsList className="bg-[#1a1932] w-full p-6 rounded-xl ">
              <TabsTrigger
                value="highlights"
                className="md:text-sm text-xs  px-4 py-2  cursor-pointer data-[state=active]:text-white data-[state=active]:bg-background p-5 rounded-xl "
              >
                Highlights
              </TabsTrigger>
              <TabsTrigger
                value="product"
                className="md:text-sm text-xs px-4 py-2 cursor-pointer data-[state=active]:text-white data-[state=active]:bg-background p-5 rounded-xl "
              >
                Product
              </TabsTrigger>
              <TabsTrigger
                value="problem"
                className="md:text-sm text-xs px-4 py-2 cursor-pointer data-[state=active]:text-white data-[state=active]:bg-background p-5 rounded-xl "
              >
                Problem
              </TabsTrigger>
              <TabsTrigger
                value="solution"
                className="md:text-sm text-xs px-4 py-2 md:flex hidden cursor-pointer data-[state=active]:text-white data-[state=active]:bg-background p-5 rounded-xl "
              >
                Solution
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="md:text-sm text-xs px-4 md:flex hidden py-2 cursor-pointer data-[state=active]:text-white data-[state=active]:bg-background p-5 rounded-xl "
              >
                Business Model
              </TabsTrigger>
              <TabsTrigger
                value="market"
                className="md:text-sm text-xs px-4 py-2 md:flex hidden cursor-pointer data-[state=active]:text-white data-[state=active]:bg-background p-5 rounded-xl "
              >
                Market
              </TabsTrigger>
              <TabsTrigger
                value="investors"
                className="md:text-sm text-xs px-4 py-2 md:flex hidden cursor-pointer data-[state=active]:text-white data-[state=active]:bg-background p-5 rounded-xl "
              >
                Investors
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="md:text-sm text-xs px-4 py-2 md:flex hidden cursor-pointer data-[state=active]:text-white data-[state=active]:bg-background p-5 rounded-xl "
              >
                Team
              </TabsTrigger>
            </TabsList>

            {/* Tabs Content */}
            <TabsContent value="highlights" className="mt-8 space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font- text-white">
                    Massive Reach:
                  </h3>
                  <p className="text-gray-400">
                    Script Network powers 600 million devices worldwide,
                    bringing AgentWood's revolutionary content ecosystem to a
                    vast global audience.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font- text-white">
                    Cutting-Edge Technology:
                  </h3>
                  <p className="text-gray-400">
                    Combines proprietary AI-driven agentic innovation and Script
                    Network's flexchain tools to redefine content creation.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font- text-white">
                    Established Ecosystem:
                  </h3>
                  <p className="text-gray-400">
                    AgentWood leverages ScriptTV's infrastructure to create
                    unparalleled opportunities for user engagement through its
                    decentralized watch-to-earn platform.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font- text-white">
                    Real-Time Agent Collaboration:
                  </h3>
                  <p className="text-gray-400">
                    Operates on Discord, enabling users and investors to
                    interact with AI agents in real-time, shape content, and
                    witness live collaboration.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font- text-white">
                    Revenue Sharing:
                  </h3>
                  <p className="text-gray-400">
                    Users engaging with AgentWood's ecosystem share in the
                    revenues generated from platform content, fostering a
                    participatory economy.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font- text-white">
                    Dynamic Agent Evolution:
                  </h3>
                  <p className="text-gray-400">
                    Using Retrieval Augmented Generation (RAG) technology,
                    AgentWood's agents evolve through user interactions,
                    creating a constantly adapting creative ecosystem.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="product" className="mt-8">
              <div className="text-gray-400">Product content goes here...</div>
            </TabsContent>

            <TabsContent value="problem" className="mt-8">
              <div className="text-gray-400">Problem content goes here...</div>
            </TabsContent>

            <TabsContent value="solution" className="mt-8">
              <div className="text-gray-400">Solution content goes here...</div>
            </TabsContent>

            <TabsContent value="business" className="mt-8">
              <div className="text-gray-400">
                Business Model content goes here...
              </div>
            </TabsContent>

            <TabsContent value="market" className="mt-8">
              <div className="text-gray-400">Market content goes here...</div>
            </TabsContent>

            <TabsContent value="investors" className="mt-8">
              <div className="text-gray-400">
                Investors content goes here...
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-8">
              <div className="text-gray-400">Team content goes here...</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default highLightTabs;
