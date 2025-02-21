import React from 'react';
import { motion } from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { personalInfo } from '../data';

const codeString = `class Developer {
  constructor() {
    this.name = "${personalInfo.name}";
    this.role = "${personalInfo.title}";
    this.education = "${personalInfo.education}";
    this.location = "${personalInfo.location}";
    this.skills = [
      "Full Stack Development",
      "MERN Stack",
      "Problem Solving",
      "Data Structures"
    ];
  }

  async code() {
    while (true) {
      await this.solveProblems();
      await this.learn();
      await this.build();
    }
  }
}`;

export const Terminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-gray-900 rounded-lg overflow-hidden shadow-xl"
    >
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-4 text-sm text-gray-400">developer.js</span>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          padding: '1.5rem',
          margin: 0,
          background: 'transparent'
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </motion.div>
  );
};