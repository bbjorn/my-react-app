import Teacher, { promote } from "./teacher";
import Reach, { Component } from "react";

// Default -> import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();
